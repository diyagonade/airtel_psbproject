import React, { useState } from 'react';
import { Store, CreditCard, ShoppingCart, Briefcase, Users, TrendingUp } from 'lucide-react';
import './Industryusecases.css';

const Industryusecases = () => {
  const [activeTab, setActiveTab] = useState('retail');

  const industries = [
    { id: 'retail', name: 'Retail', icon: Store },
    { id: 'banking', name: 'Banking', icon: CreditCard },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'others', name: 'Others', icon: Briefcase }
  ];

  const industryContent = {
    retail: {
      title: "Identify top locations for store expansion based on footfall, competition density, and high-value customer clusters.",
      icon: Store,
      features: [
        {
          icon: Store,
          title: "Optimal Store Placement",
          description: "Pinpoint high-footfall zones with low competition density for maximum revenue potential and market penetration."
        },
        {
          icon: Users,
          title: "Customer Demographic Mapping",
          description: "Identify affluent customer clusters and shopping behavior patterns to align store formats with local preferences."
        },
        {
          icon: TrendingUp,
          title: "Sales Forecasting by Location",
          description: "Predict revenue potential using mobility data, local spending patterns, and catchment area analysis."
        }
      ]
    },
    banking: {
      title: "Optimize branch locations and ATM placement based on customer density and transaction patterns.",
      icon: CreditCard,
      features: [
        {
          icon: CreditCard,
          title: "Branch Network Optimization",
          description: "Strategic placement of branches in high-traffic areas with optimal customer demographic profiles."
        },
        {
          icon: Users,
          title: "Customer Segmentation",
          description: "Identify high-value customer segments and tailor services based on location-specific preferences."
        },
        {
          icon: TrendingUp,
          title: "ATM Usage Analytics",
          description: "Optimize ATM placement and cash management based on transaction volume and timing patterns."
        }
      ]
    },
    ecommerce: {
      title: "Enhance delivery efficiency and warehouse placement through mobility insights and customer behavior analysis.",
      icon: ShoppingCart,
      features: [
        {
          icon: ShoppingCart,
          title: "Delivery Route Optimization",
          description: "Optimize last-mile delivery routes based on real-time traffic patterns and customer location clusters."
        },
        {
          icon: Users,
          title: "Customer Behavior Analysis",
          description: "Understand shopping patterns and preferences to personalize marketing and inventory management."
        },
        {
          icon: TrendingUp,
          title: "Warehouse Location Planning",
          description: "Strategic warehouse placement to minimize delivery times and maximize coverage efficiency."
        }
      ]
    },
    others: {
      title: "Leverage location intelligence for various industries including healthcare, education, and logistics.",
      icon: Briefcase,
      features: [
        {
          icon: Briefcase,
          title: "Multi-Industry Solutions",
          description: "Customized location intelligence solutions for healthcare facilities, educational institutions, and logistics hubs."
        },
        {
          icon: Users,
          title: "Demand Forecasting",
          description: "Predict service demand patterns across different industries using mobility and demographic data."
        },
        {
          icon: TrendingUp,
          title: "Operational Efficiency",
          description: "Improve operational efficiency through data-driven insights and location-based optimization strategies."
        }
      ]
    }
  };

  const currentContent = industryContent[activeTab];
  const CurrentIcon = currentContent.icon;

  return (
    <section className="industry-section">
      <div className="industry-container">
        <div className="industry-header">
          <h2 className="industry-title">Industry Use Cases</h2>
          <p className="industry-subtitle">
            Discover how Airtel's Insights as a Service transforms telco-scale data into actionable location intelligence for industry-specific outcomes
          </p>
        </div>

        <div className="industry-tabs-container">
          <div className="industry-tabs">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`industry-tab ${activeTab === industry.id ? 'active' : ''}`}
                >
                  <span className="industry-tab-icon">
                    <IconComponent className="icon" />
                  </span>
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="industry-content-card">
          <div className="industry-content">
            <div className="industry-content-header">
              <div className="industry-icon-container">
                <div className="industry-icon">
                  <CurrentIcon className="icon-large" />
                </div>
              </div>
              <h3 className="industry-content-title">
                {currentContent.title}
              </h3>
            </div>

            <div className="industry-features">
              {currentContent.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="industry-feature">
                    <div className="feature-icon-container">
                      <div className="feature-icon">
                        <FeatureIcon className="icon-medium" />
                      </div>
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industryusecases;