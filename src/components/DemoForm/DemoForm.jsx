import React, { useState } from "react";
import "./DemoForm.css";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    mobile: "",
    country: "",
  });

  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  
    setSubmitted(true);
    // Clear form
    setFormData({
      name: "",
      email: "",
      role: "",
      mobile: "",
      country: "",
    });

    // Optionally hide message after some seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="demo-form-container">
      <h2>Book Your Free Demo</h2>
      <p>Fill in your details below. We will send a demo link & connect with you shortly</p>

      {submitted && (
        <div className="success-message">
          Thank you for booking a demo! We will contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {["name", "email", "role", "mobile", "country"].map((field, index) => (
          <div className="form-row" key={index}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)} :
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">BOOK DEMO NOW</button>
      </form>
    </div>
  );
};

export default DemoForm;
