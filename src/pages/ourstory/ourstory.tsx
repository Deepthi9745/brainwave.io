import React from 'react';
import image1 from '../ourstory/image1.png';
import image2 from '../ourstory/image2.png';
import image3 from '../ourstory/image3.png';
import { useNavigate } from 'react-router-dom';
import './ourstory.css';

const OurStorySection = () => {
  const navigate = useNavigate();

  const navigateToOurStory = () => {
    navigate('/contactform'); // Navigate to the '/our-story' route
  };
  return (
    <div className="ourStorySection">
      <div className="leftside">
      <h2>Our Story</h2>
      </div>
      <div className="additionalParagraph">
        <p><strong>We know how everything works and<br></br> why your business is failing<br></br> over and over again.</strong></p>
      </div>
      
      <div className="storyItemsContainer">
      <img src={image1} alt="Story Image 1" className="storyImage enlargedImage" />

       
        <img src={image2} alt="Story Image 2" className="storyImage enlargmentImage2" />
       
        <img
      src={image3}
      alt="Story Image 3"
      className="storyImage enlargmentImage3"
    />
      </div>
      <div
        className="nextButtonContainer"
        style={{
          position: 'absolute',
          top: '50%',
          right: '50px',
          transform: 'translateY(-50%)',
        }}
      >
        <button
          className="nextButton" onClick={navigateToOurStory}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            }}
        >
          Next
        </button>
      </div>


      <div className="additionalParagraph2">
        <p><strong>We share common trends and strategies for improving your <br></br>rental income and making sure you stay in high demand . with<br></br> lots of unquie blocks, 
        you can easily build a page without<br></br> coding. Build your next landing page.</strong></p>
      </div>
      <div className="additionalParagraph3">
        <p><strong>1M+<br></br>Customers visit Omega every month<br></br>to get their service done .</strong></p>
      </div>
      <div className="additionalParagraph4">
      <p><strong>92%<br></br>Satisfaction rate comes from our<br></br> awesome customers.</strong></p>
      </div>
      <div className="additionalParagraph5">
        <p>
          <strong>4.9/5.0 <br />
          Average customer ratings we have<br></br> got all over the internet.</strong>
        </p>
      </div>
    </div>
  );
};

export default OurStorySection;
