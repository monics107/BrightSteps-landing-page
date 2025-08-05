import React, { useState, useEffect, useRef } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });
  const popupRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', type: '' });

    try {
      if (isLogin) {
        // Simulate login API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus({ message: 'Login successful!', type: 'success' });
        // Close popup after 2 seconds on success
        setTimeout(() => handleClose(), 2000);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords don't match!");
        }
        // Simulate signup API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus({ message: 'Account created successfully!', type: 'success' });
        setIsLogin(true); // Switch to login after successful signup
      }
    } catch (error) {
      setStatus({ message: error.message, type: 'error' });
    }
  };

  const handleGoogleLogin = () => {
    setStatus({ message: 'Redirecting to Google...', type: 'info' });
    // In a real app, this would redirect to Google OAuth
    console.log('Google login initiated');
  };

  const handleForgotPassword = () => {
    setStatus({ message: 'Password reset link sent to your email', type: 'info' });
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const toggleAuthMode = () => {
    setIsLogin(prev => !prev);
    setStatus({ message: '', type: '' });
    setFormData(prev => ({
      ...prev,
      password: '',
      ...(!isLogin && { name: '', confirmPassword: '' })
    }));
  };

  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`}>
      <div className={`login-popup ${isVisible ? 'visible' : ''}`} ref={popupRef}>
        <button className="close-btn" onClick={handleClose}>×</button>
        
        <div className="popup-header">
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p>{isLogin ? 'Welcome back to School ERP' : 'Create your account'}</p>
        </div>

        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <button className="google-btn" onClick={handleGoogleLogin}>
  <img 
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
    alt="Google logo" 
    onError={(e) => {
      e.target.onerror = null; 
      e.target.src = "data:image/svg+xml;base64,[base64-string-from-option-2]"
    }}
  />
  {isLogin ? 'Login with Google' : 'Sign up with Google'}
</button>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
          )}

          {isLogin && (
            <div className="form-footer">
              <button type="button" className="forgot-password" onClick={handleForgotPassword}>
                Forgot Password?
              </button>
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={status.type === 'success'}>
            {isLogin ? 'Login' : 'Sign Up'}
            {status.type === 'success' && ' ✓'}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? (
            <p>Don't have an account? <button onClick={toggleAuthMode}>Sign up</button></p>
          ) : (
            <p>Already have an account? <button onClick={toggleAuthMode}>Login</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;