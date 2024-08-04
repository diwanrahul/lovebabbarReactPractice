import React, { useEffect, useState } from 'react';

import { Images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
import { useSelector } from 'react-redux';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const isDarkMode = useSelector((state)=>state.darkmode.isDarkMode)
  useEffect(() => {
    const homeElement = document.querySelector(".app__footer");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
      homeElement.style.color = "#fff";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <h2 id='Contacts' className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <a href="mailto:diwanrahul419@gmail.com" className="p-text">Mail me</a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="phone" />
          <a href="tel:+918103379969" className="p-text">Call me</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form onSubmit={handleSubmit}>
            <div className="app__flex">
              <input 
                className="p-text" 
                type="text" 
                placeholder="Your Name" 
                name="name" 
                value={name} 
                onChange={handleChangeInput} 
                required
              />
            </div>
            <div className="app__flex">
              <input 
                className="p-text" 
                type="email" 
                placeholder="Your Email" 
                name="email" 
                value={email} 
                onChange={handleChangeInput} 
                required
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                required
              />
            </div>
            <button type="submit" className="p-text">
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
