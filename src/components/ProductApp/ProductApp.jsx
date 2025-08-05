import React from 'react';
import './ProductApp.css';

import mobile from '/mobile.png';
import playStore from '/playStore.png';
import appStore from '/appStore.png';

const ProductApp = () => {
  return (
    <div className="product-app-section">
       
      <div className="product-app-left">
        <p className="small-heading">OUR PRODUCT</p>
        <h2 className="main-heading">
          School App, Parent App and Management App
        </h2>
        <p className="sub-heading">
          The Ultimate School ERP with Mobile App for Modern School System
        </p>
        <p className="des">
          Comprehensive Easy to Use Web Based school ERP System helps you to move faster,
          save money, integrate on-premises Apps and Data anytime anywhere. Explore the
          online school erp with built-in school app features and start the new education
          administration journey with the new-edge technology!
        </p>

        <div className="store-buttons">
          <img src={playStore} alt="Get it on Google Play" />
          <img src={appStore} alt="Download on the App Store" />
        </div>
      </div>

      <div className="product-app-right">
        <img src={mobile} alt=""></img>
      </div> 
     
    </div>
  );
};

export default ProductApp;