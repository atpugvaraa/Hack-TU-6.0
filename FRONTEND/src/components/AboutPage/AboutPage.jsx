import React from 'react';
import AboutSection from './AboutSection';
import ExecutiveBoard from './Contributors';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <AboutSection /> 
      <ExecutiveBoard />
    </div>
  );
}

export default AboutPage;
