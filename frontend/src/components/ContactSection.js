import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { submitContactForm } from '../data/mock';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      
      toast({
        title: "Thank you!",
        description: "We will be in touch soon!",
        className: "bg-green-600 text-white border-0",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        requirements: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ padding: '160px 7.6923%' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="display-large mb-6">Get In Touch</h2>
          <p className="body-large max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-2 mb-6">Let's Start a Conversation</h3>
              <p className="body-medium mb-8" style={{ color: 'var(--text-secondary)' }}>
                We're here to help you succeed. Reach out to discuss your project requirements 
                and discover how 7EKMAWARE can elevate your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div 
                  className="p-3"
                  style={{ 
                    background: 'var(--brand-primary)', 
                    borderRadius: '0px' 
                  }}
                >
                  <Mail size={24} color="#000000" />
                </div>
                <div>
                  <p className="heading-3">Email</p>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    hekmaware@outlook.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="p-3"
                  style={{ 
                    background: 'var(--brand-primary)', 
                    borderRadius: '0px' 
                  }}
                >
                  <Phone size={24} color="#000000" />
                </div>
                <div>
                  <p className="heading-3">Phone</p>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    Available upon request
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="p-3"
                  style={{ 
                    background: 'var(--brand-primary)', 
                    borderRadius: '0px' 
                  }}
                >
                  <MapPin size={24} color="#000000" />
                </div>
                <div>
                  <p className="heading-3">Service Area</p>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    Global Digital Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card 
            className="dark-hover"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '0px'
            }}
          >
            <CardHeader>
              <CardTitle className="heading-2">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="body-medium mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="body-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="body-medium mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="requirements" className="body-medium mb-2 block">
                    Requirements *
                  </Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    required
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full resize-none"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                  style={{
                    background: 'var(--brand-primary)',
                    color: '#000000',
                    borderRadius: '0px'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;