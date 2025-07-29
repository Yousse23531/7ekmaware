import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="py-12"
      style={{ 
        background: 'var(--bg-secondary)', 
        borderTop: '1px solid var(--border-subtle)',
        padding: '60px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="heading-2 mb-4" style={{ color: 'var(--brand-primary)' }}>
              7EKMA-WARE
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Transforming businesses through innovative digital solutions. 
              We craft experiences that matter.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3 mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Web Development
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                IT & Business Consulting
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                UI/UX Design
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Graphic Design & Branding
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Social Media Management
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3 mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                hekmaware@outlook.com
              </p>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Global Digital Solutions
              </p>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="body-muted">
            © 2025 7EKMAWARE. All rights reserved. Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;