import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for trying out ChatZyr and getting started with AI conversations.',
      features: [
        "Basic AI conversations",
        "Limited daily messages",
        "Standard response quality",
        "Community support",
        "Basic conversation starters"
      ],
      buttonText: 'Get Started Free',
      buttonClass: 'btn-primary',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$9',
      period: '/month',
      description: 'Enhanced experience with more features and better AI capabilities.',
      features: [
        "Unlimited conversations",
        "High-quality AI responses",
        "Advanced conversation starters",
        "Context memory for chats",
        "Priority support",
        "Ad-free experience"
      ],
      buttonText: 'Upgrade to Pro',
      buttonClass: 'btn-primary',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$19',
      period: '/month',
      description: 'Complete access to all features and exclusive AI models.',
      features: [
        "Everything in Pro",
        "Access to exclusive AI models",
        "Early access to new features",
        "Multi-device synchronization",
        "Advanced conversation analytics",
        "Dedicated customer support",
        "Custom conversation templates"
      ],
      buttonText: 'Go Premium',
      buttonClass: 'btn-primary',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 className="section-title">Choose Your Perfect Plan</h2>
        <p className="section-subtitle">
          Select the plan that best fits your conversation needs and unlock the full potential of AI chat.
        </p>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`btn ${plan.buttonClass} btn-large pricing-btn`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
