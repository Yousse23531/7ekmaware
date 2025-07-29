// Frontend API integration for 7EKMAWARE contact form

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const mockServices = [
  {
    title: "Web Development",
    shortDescription: "High-performance, scalable websites and web applications tailored to your business goals.",
    fullDescription: "We build high-performance, scalable websites and web applications tailored to your business goals. Whether it's an e-commerce platform, a company website, or a custom web app, our solutions are secure, fast, and fully responsive.",
    offerings: [
      "Custom websites (HTML/CSS, JavaScript, PHP, Python, etc.)",
      "WordPress development",
      "E-commerce (WooCommerce, Shopify)",
      "CMS integration",
      "Web application development (dashboards, portals, etc.)",
      "Website maintenance & optimization"
    ]
  },
  {
    title: "IT & Business Consulting", 
    shortDescription: "Expert digital consulting to help you make smart decisions and implement the right technologies.",
    fullDescription: "We provide expert digital consulting to help you make smart decisions and implement the right technologies. Whether you're launching a new product or optimizing an existing system, our team supports you every step of the way.",
    offerings: [
      "Digital transformation consulting",
      "Software architecture and project planning", 
      "Technology stack selection",
      "Product-market fit analysis",
      "UX & user journey auditing",
      "Security and scalability assessments"
    ]
  },
  {
    title: "Web & UI/UX Design",
    shortDescription: "Visually stunning, user-centric websites that don't just look good — they convert.",
    fullDescription: "We craft visually stunning, user-centric websites that don't just look good — they convert. Our focus is on clean, intuitive, and accessible design that reflects your brand identity and improves user experience.",
    offerings: [
      "Website UI/UX design",
      "Wireframing and prototyping",
      "Landing page design", 
      "Mobile-first design",
      "Redesign of existing websites",
      "Figma/Adobe XD mockups"
    ]
  },
  {
    title: "Graphic Design & Branding",
    shortDescription: "Powerful, consistent visual language that speaks before you do across all platforms.",
    fullDescription: "Your brand identity speaks before you do. Our graphic designers help build a powerful, consistent visual language across all platforms.",
    offerings: [
      "Logo design",
      "Brand identity kits (colors, typography, usage)",
      "Business cards & brochures",
      "Banners & digital assets", 
      "Visuals for ads and campaigns",
      "Presentation and pitch decks"
    ]
  },
  {
    title: "Social Media Management",
    shortDescription: "Grow your digital presence with engaging content and strategy-driven management.",
    fullDescription: "We grow your digital presence with engaging content and strategy-driven management. From visuals to hashtags, we handle every detail to ensure your brand connects with your audience.",
    offerings: [
      "Social media strategy",
      "Content creation (graphics, videos, captions)",
      "Account setup and branding",
      "Weekly/monthly content planning",
      "Page management (Facebook, Instagram, LinkedIn, etc.)",
      "Ads setup and performance reporting"
    ]
  }
];

// Real API function to submit contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};