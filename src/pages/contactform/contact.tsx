import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../Header/background.webp'; // Import the image file
import { useNavigate } from 'react-router-dom';

const Background: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    pan_no: '',
    gender: 'Male',
    adhaar_no: '',
    mobilenumber: '',
    emailId: '',
    age: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',
        formData
      );
      console.log('Data submitted successfully:', response.data);
      // Clear form after successful submission
      setFormData({
        first_name: '',
        last_name: '',
        pan_no: '',
        gender: 'Male',
        adhaar_no: '',
        mobilenumber: '',
        emailId: '',
        age: '',
      });
      // Navigate to '/contactdisplay' after successful submission
      navigate('/contactdisplay');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // 100% of the viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px',
    textAlign: 'center',
    padding: '50px', // Padding for content
  };

  const formContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns with equal width
    gridGap: '20px', // Gap between grid items
    maxWidth: '900px', // Maximum width of the form container
    padding: '40px', // Padding for the form container
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
    borderRadius: '8px', // Rounded corners for the form container
  };

  const formFieldStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px', // Vertical margin for form fields
  };

  const labelStyle: React.CSSProperties = {
    flex: '0 0 180px', // Fixed width for labels
    textAlign: 'right', // Right-align label text
    paddingRight: '20px', // Spacing between label and input
  };

  const inputContainerStyle: React.CSSProperties = {
    flex: '1', // Allow input container to grow
    display: 'flex',
    alignItems: 'center',
  };

  const selectStyle: React.CSSProperties = {
    flex: '1', // Take up remaining space in container
    height: '40px', // Adjust the height of the select element
    fontSize: '18px', // Adjust font size
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ marginTop: '-740px', marginRight: '-150px' }}>Contact Form</h1>
      <form style={formContainerStyle} onSubmit={handleSubmit}>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="first_name">
            First Name:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="last_name">
            Last Name:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="pan_no">
            PAN Number:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="text"
              id="pan_no"
              name="pan_no"
              value={formData.pan_no}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="gender">
            Gender:
          </label>
          <div style={inputContainerStyle}>
            <select
              id="gender"
              name="gender"
              defaultValue={formData.gender}
              style={selectStyle}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="adhaar_no">
            Aadhaar Number:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="text"
              id="adhaar_no"
              name="adhaar_no"
              value={formData.adhaar_no}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="mobilenumber">
            Mobile Number:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="tel"
              id="mobilenumber"
              name="mobilenumber"
              value={formData.mobilenumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="emailId">
            Email:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="email"
              id="emailId"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle} htmlFor="age">
            Age:
          </label>
          <div style={inputContainerStyle}>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            style={{
              marginTop: '20px',
              height: '40px',
              width: '200px', // Set width of the button
              fontSize: '18px',
              backgroundColor: 'blue',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '320px',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Background;
