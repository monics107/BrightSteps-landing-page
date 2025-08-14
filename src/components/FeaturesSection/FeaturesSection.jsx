// import React from 'react';
// import './FeaturesSection.css';

// const features = [
//   { name: 'Whatsapp', icon: '/featuressection/Whatsapp.png' },
//   { name: 'Biometric', icon: '/featuressection/Biometric.png' },
//   { name: 'Virtual Class', icon: '/featuressection/Virtual Class.png' },
//   { name: 'Vehicle Tracking', icon: '/featuressection/Tracking.png' },
//   { name: 'E-Exam', icon: '/featuressection/Exam.png' },
//   { name: 'Online Payment', icon: '/featuressection/Online Payment.png' },
//   { name: 'Barcode', icon: '/featuressection/Barcode.png' },
//   { name: 'Tally Integration', icon: '/featuressection/Tally.png' },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="features-section">
//       <h3 className="subtitle">We Provide</h3>
//       <h2 className="title">Integrated School Management Software</h2>
//       <div className="features-grid">
//         {features.map((feature, idx) => (
//           <div key={idx} className="feature-box">
//             <img src={feature.icon} alt={feature.name} className="feature-img" />
//             <p>{feature.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
import React from 'react';
import './FeaturesSection.css';

const features = [
  { name: 'Whatsapp', icon: '/BrightSteps-landing-page/featuressection/Whatsapp.png' },
  { name: 'Biometric', icon: '/BrightSteps-landing-page/featuressection/Biometric.png' },
  { name: 'Virtual Class', icon: '/BrightSteps-landing-page/featuressection/Virtual Class.png' },
  { name: 'Vehicle Tracking', icon: '/BrightSteps-landing-page/featuressection/Tracking.png' },
  { name: 'E-Exam', icon: '/BrightSteps-landing-page/featuressection/Exam.png' },
  { name: 'Online Payment', icon: '/BrightSteps-landing-page/featuressection/Online Payment.png' },
  { name: 'Barcode', icon: '/BrightSteps-landing-page/featuressection/Barcode.png' },
  { name: 'Tally Integration', icon: '/BrightSteps-landing-page/featuressection/Tally.png' },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h3 className="subtitle">We Provide</h3>
      <h2 className="title">Integrated School Management Software</h2>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-box">
            <img src={feature.icon} alt={feature.name} className="feature-img" />
            <p>{feature.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
