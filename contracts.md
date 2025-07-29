# 7EKMAWARE Website API Contracts

## Backend Implementation Plan

### Contact Form API Endpoint

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email format)",
  "phone": "string (required)",
  "requirements": "string (required)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you! We will be in touch soon!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message describing the issue"
}
```

### SMTP Email Configuration

**Email Service:** Simple SMTP (Gmail/Outlook)
**Recipient:** hekmaware@outlook.com
**Email Template:** Professional HTML format with form data

### Current Mock Data Integration

**File:** `/app/frontend/src/data/mock.js`
- `submitContactForm()` function currently mocks the API call
- Need to replace with actual API call to `/api/contact`

**Frontend Integration Points:**
- `ContactSection.js` - Form submission handler
- Toast notifications for success/error feedback
- Form reset on successful submission

### Implementation Steps

1. **Backend Development:**
   - Create contact form endpoint
   - Implement SMTP email service
   - Add form validation
   - Error handling and logging

2. **Frontend Integration:**
   - Update `submitContactForm()` to call real API
   - Remove mock delay
   - Maintain existing toast notification system

3. **Email Configuration:**
   - Set up SMTP credentials in .env
   - Create professional email template
   - Include all form fields in email body

### Dependencies to Install

**Backend:**
- No additional packages needed (using Python's built-in smtplib)
- Already have FastAPI for API endpoints

**Frontend:**
- No changes needed (already using axios for API calls)

### Security Considerations

- Input validation and sanitization
- Rate limiting for form submissions
- SMTP credentials stored securely in .env