import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../contactform/sky.jpeg'; // Import your background image file
import { Navigate, useNavigate } from 'react-router-dom';
interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  pan_no: string;
  gender: string;
  adhaar_no: string;
  mobilenumber: string;
  emailId: string;
  age: number;
}

const ContactDisplay: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    console.log(`Editing contact with ID: ${id}`);
    navigate(`/contactform/${id}`); // Correct usage of navigate
  };
  const fetchContacts = async () => {
    try {
      const response = await axios.get<Contact[]>(
        'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile'
      );
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`
      );
      // Refresh contacts after deletion
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };



  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh', // Ensure full viewport height
    display: 'flex',
    flexDirection: 'column', // Align content vertically
    alignItems: 'center',
    color: 'white', // Text color for contrast
    fontFamily: 'Arial, sans-serif',
    padding: '50px', // Padding for content
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <h1>Contact List</h1>
      <div style={{ marginBottom: '20px', fontWeight: 'bold', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>First Name</div>
          <div style={{ flex: 1 }}>Last Name</div>
          <div style={{ flex: 1 }}>Mobile Number</div>
          <div style={{ flex: 1 }}>Aadhaar Number</div>
          <div style={{ flex: 1 }}>PAN Number</div>
          <div style={{ flex: 1 }}>Age</div>
          <div style={{ flex: 1 }}>Actions</div>
        </div>
      </div>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            width: '100%',
          }}
        >
          <div style={{ flex: 1 }}>{contact.first_name}</div>
          <div style={{ flex: 1 }}>{contact.last_name}</div>
          <div style={{ flex: 1 }}>{contact.mobilenumber}</div>
          <div style={{ flex: 1 }}>{contact.adhaar_no}</div>
          <div style={{ flex: 1 }}>{contact.pan_no}</div>
          <div style={{ flex: 1 }}>{contact.age}</div>
          <div style={{ flex: 1 }}>
          <button onClick={() => handleEdit(contact.id)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDisplay;
