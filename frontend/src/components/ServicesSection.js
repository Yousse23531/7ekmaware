import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Globe, 
  Brain, 
  Palette, 
  PenTool, 
  Share2 
} from 'lucide-react';
import { mockServices } from '../data/mock';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const serviceIcons = {
    'Web Development': Globe,
    'IT & Business Consulting': Brain,
    'Web & UI/UX Design': Palette,
    'Graphic Design & Branding': PenTool,
    'Social Media Management': Share2
  };

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20" style={{ padding: '160px 7.6923%' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="display-large mb-6">Our Services</h2>
          <p className="body-large max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We offer a comprehensive suite of digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service, index) => {
            const IconComponent = serviceIcons[service.title];
            const isExpanded = expandedService === index;

            return (
              <Card 
                key={index} 
                className="dark-hover dark-transition"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px'
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {IconComponent && (
                      <div 
                        className="p-3"
                        style={{ 
                          background: 'var(--brand-primary)', 
                          borderRadius: '0px' 
                        }}
                      >
                        <IconComponent size={24} color="#000000" />
                      </div>
                    )}
                    <CardTitle className="heading-3">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="body-small mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {isExpanded ? service.fullDescription : service.shortDescription}
                  </p>
                  
                  {isExpanded && (
                    <div className="mb-6 fade-in">
                      <h4 className="heading-3 mb-3" style={{ color: 'var(--brand-primary)' }}>
                        What we offer:
                      </h4>
                      <ul className="space-y-2">
                        {service.offerings.map((offering, idx) => (
                          <li key={idx} className="body-small flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--brand-primary)' }}>•</span>
                            {offering}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button
                    onClick={() => toggleExpand(index)}
                    className="btn-secondary w-full"
                    style={{
                      background: isExpanded ? 'var(--brand-primary)' : 'rgba(255, 255, 255, 0.1)',
                      color: isExpanded ? '#000000' : '#FFFFFF',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px'
                    }}
                  >
                    {isExpanded ? 'Show Less' : 'View More'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;