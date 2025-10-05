import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer from './components/Footer/Footer'; // make sure Footer is imported

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <main>
          <Routes>
            <Route path="/" element={<Home setShowLogin={setShowLogin} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
