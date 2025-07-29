from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import asyncio


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormSubmission(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=1, max_length=20)
    requirements: str = Field(..., min_length=1, max_length=2000)

class ContactFormResponse(BaseModel):
    success: bool
    message: str

# Email service function
async def send_contact_email(form_data: ContactFormSubmission):
    """Send contact form data via SMTP email"""
    try:
        # Email configuration
        smtp_server = "smtp.gmail.com"  # Default to Gmail SMTP
        smtp_port = 587
        sender_email = "noreply@7ekmaware.com"  # This can be any email
        recipient_email = "hekmaware@outlook.com"
        
        # Create message
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Contact Form Submission from {form_data.name}"
        msg["From"] = sender_email
        msg["To"] = recipient_email
        
        # Create the HTML content
        html_content = f"""
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #f8f9fa; padding: 30px; border-radius: 10px;">
              <h2 style="color: #00FFD1; margin-bottom: 20px;">New Contact Form Submission</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
                <p><strong>Name:</strong> {form_data.name}</p>
                <p><strong>Email:</strong> {form_data.email}</p>
                <p><strong>Phone:</strong> {form_data.phone}</p>
              </div>
              <div style="background: white; padding: 20px; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #333;">Requirements</h3>
                <p style="white-space: pre-wrap;">{form_data.requirements}</p>
              </div>
              <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  This message was sent from the 7EKMAWARE contact form on {datetime.now().strftime('%Y-%m-%d at %H:%M:%S')}
                </p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Create plain text version
        text_content = f"""
        New Contact Form Submission from 7EKMAWARE Website
        
        Contact Details:
        Name: {form_data.name}
        Email: {form_data.email}
        Phone: {form_data.phone}
        
        Requirements:
        {form_data.requirements}
        
        Sent on: {datetime.now().strftime('%Y-%m-%d at %H:%M:%S')}
        """
        
        # Attach parts
        part1 = MIMEText(text_content, "plain")
        part2 = MIMEText(html_content, "html")
        msg.attach(part1)
        msg.attach(part2)
        
        # For demo purposes, we'll simulate email sending
        # In production, you would use actual SMTP credentials
        await asyncio.sleep(0.1)  # Simulate email sending delay
        
        # Log the email content (in production, this would actually send)
        logger.info(f"Contact form email would be sent to {recipient_email}")
        logger.info(f"Subject: {msg['Subject']}")
        logger.info(f"From: {form_data.name} ({form_data.email})")
        
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
