import React from 'react';
import '../styles/FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="feature">
        <h3>Modern Design</h3>
        <p>Clean and minimalist design that is visually appealing.</p>
      </div>
      <div className="feature">
        <h3>Responsive Layout</h3>
        <p>Optimized for all devices, providing seamless user experience.</p>
      </div>
      <div className="feature">
        <h3>Interactive Elements</h3>
        <p>Engage users with interactive elements and animations.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;