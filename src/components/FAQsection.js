import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Airtel Intelligence identify high-potential locations?",
      answer: "Airtel Intelligence uses advanced analytics combining mobility data, footfall patterns, demographic insights, and real-time location intelligence to identify optimal locations for your business expansion."
    },
    {
      question: "What types of businesses can benefit?",
      answer: "Our platform serves retail chains, restaurants, banks, healthcare facilities, real estate developers, and any business that relies on location-based decisions for growth and optimization."
    },
    {
      question: "How accurate is the footfall and mobility data?",
      answer: "Our data is sourced from Airtel's extensive network infrastructure, providing highly accurate and real-time insights with over 95% accuracy in urban areas and continuous validation through multiple data sources."
    },
    {
      question: "Is customer privacy protected?",
      answer: "Yes, we strictly adhere to privacy regulations and use anonymized, aggregated data. All insights are derived without compromising individual privacy, following GDPR and local data protection standards."
    },
    {
      question: "How frequently is the data updated?",
      answer: "Our data is updated in real-time for mobility patterns and daily for demographic insights, ensuring you always have the most current information for decision-making."
    },
    {
      question: "Can I analyze customer movement patterns over time?",
      answer: "Absolutely. Our platform provides historical trend analysis, seasonal patterns, and predictive modeling to help you understand customer behavior across different time periods."
    },
    {
      question: "Can I evaluate existing store performance?",
      answer: "Yes, you can benchmark your current locations against similar businesses in the area, analyze catchment areas, and identify optimization opportunities for existing stores."
    },
    {
      question: "How can this help with marketing and campaign planning?",
      answer: "Our hyperlocal targeting capabilities help you identify high-potential micro-markets, optimize campaign reach, and measure campaign effectiveness through footfall attribution and audience insights."
    },
    {
      question: "Can it identify underserved or high-potential markets?",
      answer: "Yes, our whitespace analysis identifies gaps in market coverage, underserved areas with high potential, and emerging neighborhoods perfect for expansion opportunities."
    },
    {
      question: "How is this different from traditional GIS tools?",
      answer: "Unlike static GIS tools, Airtel Intelligence provides real-time, dynamic insights powered by live mobility data, predictive analytics, and comprehensive demographic intelligence for actionable business decisions."
    },
    {
      question: "Do I need analytics expertise to use it?",
      answer: "No, our platform is designed for business users with intuitive dashboards, automated insights, and clear visualizations that translate complex data into actionable business recommendations."
    },
    {
      question: "Can I track post-launch footfall or campaign impact?",
      answer: "Yes, our platform provides comprehensive post-launch analytics including footfall measurement, campaign attribution, and ROI tracking to measure the success of your initiatives."
    },
    {
      question: "Is the platform scalable across geographies?",
      answer: "Absolutely. Our platform covers major urban areas across India and can scale to support multi-city operations, providing consistent insights across different markets and regions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question-button"
              >
                <span className="faq-question-text">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="faq-icon" />
                ) : (
                  <ChevronDown className="faq-icon" />
                )}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p className="faq-answer-text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;