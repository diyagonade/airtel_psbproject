import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    contactType: 'sales',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number
    if (name === 'phone') {
      // Remove any non-digit characters
      const numericValue = value.replace(/\D/g, '');
      // Limit to 10 digits
      const limitedValue = numericValue.slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: limitedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success popup
      setShowPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        contactType: 'sales',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Ready to transform your location strategy? Let's discuss your requirements.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name *</label>
              <input
                type="text"
                name="name"
                required
                className="form-input"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email ID *</label>
              <input
                type="email"
                name="email"
                required
                className="form-input"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Number *</label>
              <input
                type="text"
                name="phone"
                required
                className="form-input"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
              />
              <p className="form-hint">Enter 10-digit number only</p>
            </div>

            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                name="company"
                required
                className="form-input"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Who would you like to contact? *</label>
              <div className="select-wrapper">
                <select
                  name="contactType"
                  required
                  className="form-select"
                  value={formData.contactType}
                  onChange={handleChange}
                >
                  <option value="sales">Sales</option>
                  <option value="support">Customer Support</option>
                  <option value="talent">Talent Management</option>
                  <option value="marketing">Marketing & PR</option>
                  <option value="privacy">Privacy Team</option>
                </select>
                <div className="select-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-group form-group-full">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-textarea"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group form-group-full">
              <button 
                type="submit" 
                className={`form-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
            
            <h3 className="popup-title">Thank You!</h3>
            
            <p className="popup-message">
              Your details have been submitted successfully. Someone from the team will contact you shortly.
            </p>
            
            <div className="popup-next-steps">
              <h4 className="next-steps-title">What happens next?</h4>
              <ul className="next-steps-list">
                <li>• Our team will review your inquiry</li>
                <li>• You'll receive a confirmation email</li>
                <li>• We'll contact you within 24 hours</li>
                <li>• Schedule a personalized consultation</li>
              </ul>
            </div>
            
            <button className="popup-close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;