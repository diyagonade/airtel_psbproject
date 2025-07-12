import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date) => {
    setFormData(prev => ({
      ...prev,
      selectedDate: date
    }));
  };

  const isFormValid = () => {
    return formData.name && formData.company && formData.email && formData.phone && formData.selectedDate;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Handle form submission here
      // console.log('Form submitted:', formData);
      setShowModal(false);
    }
  };

  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-grid">
          <div className="header-content">
            <div className="header-text">
              <h1 className="header-title">
                Expand Smarter.
                <br />
                <span className="header-title-gradient">
                  Grow Faster.
                </span>
              </h1>
              <h2 className="header-subtitle">
                Insights as a Service by Airtel turns telco-scale data into powerful location intelligence.
              </h2>
              <h3 className="header-description">
                Whether you're expanding retail, targeting high-value customers, or optimizing media spends, our AI-powered platform helps you pinpoint the best location, markets, and cities to drive business impact.
              </h3>
            </div>
            <div className="header-buttons">
              <button className="btn-primary">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button 
                onClick={() => setShowModal(true)}
                className="btn-secondary"
              >
                Book a Demo
              </button>
            </div>
          </div>
          <div className="header-image-container">
            <div className="header-image-wrapper">
              <img src="/3.png" alt="Location Intelligence Platform" className="header-image" />
              <div className="stat-card stat-card-top">
                <div className="stat-primary">Footfall: 15K/day</div>
                <div className="stat-secondary">Demographics: A+</div>
              </div>
              <div className="stat-card stat-card-bottom">
                <div className="stat-primary">ROI: 24%</div>
                <div className="stat-secondary">Competition: Low</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-wrapper">
                <div className="modal-title-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="calendar-icon">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <h3 className="modal-title">Schedule Your Demo</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="modal-close-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="close-icon">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="modal-description">Select a convenient date and time for your personalized demo</p>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company *</label>
                  <input 
                    type="text" 
                    name="company" 
                    required 
                    className="form-input" 
                    placeholder="Company name" 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-input" 
                  placeholder="your.email@company.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="form-input" 
                  placeholder="+91 98765 43210" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label date-label">Select Date</label>
                <div className="date-grid">
                  {['Wed, Jul 9', 'Thu, Jul 10', 'Fri, Jul 11', 'Mon, Jul 14', 'Tue, Jul 15', 'Wed, Jul 16', 'Thu, Jul 17', 'Fri, Jul 18', 'Mon, Jul 21', 'Tue, Jul 22'].map((date) => (
                    <button 
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className={`date-btn ${formData.selectedDate === date ? 'date-btn-selected' : ''}`}
                    >
                      <div className="date-text">{date}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-actions">
                <button 
                  onClick={() => setShowModal(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!isFormValid()}
                  className={`btn-submit ${isFormValid() ? 'btn-submit-enabled' : 'btn-submit-disabled'}`}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;