import React from 'react';

function PricingPlans() {
  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="plan">
        <h3>Custom Plan Service</h3>
        <p>Flexible and Adjustable Plans</p>
        <p>Rp ??? / ???</p>
        <button>Order Now</button>
      </div>
      <div className="plan">
        <h3>Weekly Service</h3>
        <p>Perfect for Short-Term Needs</p>
        <p>Rp 5.000 / Week</p>
        <button>Order Now</button>
      </div>
      <div className="plan">
        <h3>Monthly Service</h3>
        <p>Comprehensive Monthly Service</p>
        <p>Rp 18.000 / Month</p>
        <button>Order Now</button>
      </div>
    </section>
  );
}

export default PricingPlans;
