import React from 'react';

function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px 30px', backgroundColor: '#f8f9fa' }}>
      <div style={{ fontSize: '24px', marginRight: '20px' }}>Brainwave.io</div>

      <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Demos</a>
      <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Pages</a>
      <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Support</a>
      <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Contact</a>
      <button style={{ padding: '10px 26px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '50px', cursor: 'pointer', marginLeft: 'auto' }}>Get Started a Project</button>
    <div><hr style={{ width: '100%', borderColor: '#ddd', marginTop: '20px' }} /></div>

    
    </div>
    
    
  
  );
}

export default Header;
