import React from 'react';
import { Target, Users, BarChart3, Search, Eye, MapPin } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="service-icon" />,
      title: "Smart Expansion Planning",
      description: "Discover optimal streets, zones, and neighborhoods for new outlets using mobility, footfall, and demographic data.",
      image: "/3.png"
    },
    {
      icon: <Users className="service-icon" />,
      title: "Hyperlocal Audience Targeting",
      description: "Sharpen marketing by identifying high-potential micro-markets and engaging customers where they live, move, and shop.",
      image: "/2.png"
    },
    {
      icon: <BarChart3 className="service-icon" />,
      title: "Location Performance Insights",
      description: "Benchmark outlet activity with localized metrics like traffic density, dwell time, and area affinity to improve operations.",
      image: "/1.png"
    },
    {
      icon: <Search className="service-icon" />,
      title: "Competitive Intelligence",
      description: "Track competitor presence, store density, and whitespace to guide smarter market entry or repositioning strategies.",
      image: "/4.png"
    },
    {
      icon: <Eye className="service-icon" />,
      title: "Optimized Outdoor Media & Visibility",
      description: "Place billboards and DOOH campaigns in zones with high footfall and target-rich audiences.",
      image: "/5.png"
    },
    {
      icon: <MapPin className="service-icon" />,
      title: "Service Coverage Optimization",
      description: "Identify underserved or oversaturated regions using geo-mapped traffic data to refine distribution or network strategy.",
      image: "/4.png"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            What Airtel Intelligence Can Do for You
          </h2>
          <p className="services-subtitle">
            Comprehensive solutions for every aspect of location intelligence and business growth
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-description">
                {service.description}
              </p>
              <div className="service-image-wrapper">
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;