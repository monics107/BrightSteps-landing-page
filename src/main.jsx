import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <App />
 <div id="BrightStepsSection"></div>
<div id="ProductApp"></div>
<div id="PricingPlans"></div>
 </BrowserRouter>
);
    