import React from 'react';
import Header from '../pages/Header/Header'; // Adjust the import path for Header
import heroImage from '../images/heroimg1.png'; // Import the hero image (adjust path as needed)
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import { useNavigate } from 'react-router-dom';
import './Landing.css'; // Import external CSS file for custom styles
import OurStorySection from '../pages/ourstory/ourstory';

function Landing() {
  const navigate = useNavigate();

  const navigateToOurStory = () => {
    navigate('/ourstory'); // Navigate to the '/our-story' route
  };
  return (
    
    <div>
      <Header />

      {/* Hero Section with background image */}
      <div className="heroContainer">
        {/* Overlay Content */}
        <div className="heroContent">
          <p className="heroContent1"><span style={{ color: 'red', fontWeight: 'normal', fontSize: '18px' }}>LET'S SHIFT YOUR BUSINESS</span></p>
          <p className="heroContent2"><span style={{ color: 'black', fontWeight: 'bold', fontSize: '50px' }}>Shift your business<br></br> fast with Shade Pro.</span></p>
          <p className="heroContent3">With lots of unique blocks, you can easily build a page without <br></br>coding. Build your next consultancy website within a few minutes.</p>
          <button type="button" className="getBtn"onClick={navigateToOurStory}>Go to OurStory</button><p>Click her  </p>
        </div>
      </div>
      <div className="servicesSection">
        <h2>Our Services</h2>
        <p><strong>We provide great services for <br></br>our customers based on needs</strong></p>
      </div>
      <div className="rectangleContainer">
        <div className="rectangle green">
          <img src={icon1} alt="Icon 1" />
        </div>
        <div className="rectangle blue">
          <img src={icon2} alt="Icon 2" />
        </div>
        <div className="rectangle red">
          <img src={icon3} alt="Icon 3" />
        </div>

        <div className="user icon">
          <img src={icon4} alt="Icon 4" />
        </div>
      </div>
    </div>
    
  );
}

export default Landing;
