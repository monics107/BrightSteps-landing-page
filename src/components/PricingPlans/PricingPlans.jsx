
import React from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic Price",
      price: "₹200",
      description: "Ideal for small Schools",
      features: [
        "Upto 100 students",
        "Limited module access",
        "Email support",
      ],
    },
    {
      title: "Standard Price",
      price: "₹1000",
      description: "Perfect for medium-sized School",
      features: [
        "Upto 500 students",
        "Access to all modules",
        "Priority email support",
      ],
    },
    {
      title: "Premium Price",
      price: "₹2500",
      description: "For growing institutions with full needs",
      features: [
        "Unlimited students",
        "All features unlocked",
        "Priority support + phone assistance",
      ],
    },
  ];

  const scrollToDemoForm = () => {
    const demoFormSection = document.querySelector(".demo-form-container");
    if (demoFormSection) {
      demoFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pricing-container">
      <h2 className="heading">
        Reliable infrastructure powered by strong in-house tools
        <br />
        <span className="subheading">built for performance and growth</span>
      </h2>
      <div className="cards">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <h3>
              {plan.title} : <span className="price">{plan.price}</span>
            </h3>
            <p className="description">{plan.description}</p>
            <ul className="features">
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {/* Updated button with scroll action */}
            <button className="contact-button" onClick={scrollToDemoForm}>
              Book Demo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
