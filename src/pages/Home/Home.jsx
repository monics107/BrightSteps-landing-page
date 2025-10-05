
import React from 'react';
import Header from '../../components/Header/Header';
import TrustedSection from '../../components/partners/TrustedSection';
import BrightStepsSection from '../../components/BrightStepsSection/BrightStepsSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import InfoBanner from '../../components/InfoBanner/InfoBanner';
import ClientTestimonials from '../../components/ClientTestimonials/ClientTestimonials';
import MiddleSection from '../../components/MiddleSection/MiddleSection';
import ProductApp from '../../components/ProductApp/ProductApp';
import PricingPlans from '../../components/PricingPlans/PricingPlans';
import DemoForm from '../../components/DemoForm/DemoForm';
import Footer from '../../components/Footer/Footer';

const Home = ({ setShowLogin }) => {
  return (
    <div>
      <Header />
      <TrustedSection />
      <div id="BrightStepsSection">
        <BrightStepsSection setShowLogin={setShowLogin} />
      </div>
      <FeaturesSection />
      <div id="infoBanner">
        <InfoBanner />
      </div>
      <ClientTestimonials />
      <MiddleSection />
      <div id="ProductApp">
        <ProductApp />
      </div>
      <div id="PricingPlans">
        <PricingPlans setShowLogin={setShowLogin} /> {/* Pass here */}
      </div>
      <DemoForm />
      
    </div>
  );
};

export default Home;
