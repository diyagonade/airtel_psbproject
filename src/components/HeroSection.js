import React from 'react';
import { Users, Database, Zap } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section"> 
      <div className="hero-container">
        <div className="hero-grid">

          <div className="hero-card">
            <Users className="hero-icon" />
            <h3 className="hero-title">400M+ Users Network</h3>
            <p className="hero-description">Airtel offers unmatched location intelligence from a network of 400M+ users across India.</p>
          </div>

          <div className="hero-card">
            <Database className="hero-icon" />
            <h3 className="hero-title">First-Party Telco Data</h3>
            <p className="hero-description">Built on first-party telco data, Airtel provides credible and scalable location insights with clear provenance and consistency.</p>
          </div>

          <div className="hero-card">
            <Zap className="hero-icon" />
            <h3 className="hero-title">Mobility Intelligence</h3>
            <p className="hero-description">Mobility intelligence identifies footfall patterns and location demand clusters, powered by telecom-grade infrastructure.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;