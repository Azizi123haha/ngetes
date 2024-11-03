import React from 'react';
import FeatureSection from './components/FeatureSection';
import PricingPlans from './components/PricingPlans';
import './style.css';

function App() {
  return (
    <div className="container">
      <header className="header">AutoChat</header>
      <FeatureSection />
      <PricingPlans />
    </div>
  );
}

export default App;
