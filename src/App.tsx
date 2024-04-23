import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/Header/Header';
import Landing from './Landing/Landingscreen';
import OurStorySection from './pages/ourstory/ourstory';
import ContactForm from './pages/contactform/contact';
import ContactDisplay from './pages/contactform/contactdisplay';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/ourstory" element={<OurStorySection/>}/>
        <Route path="/contactform" element={<ContactForm/>}/>
        <Route path="/contactdisplay" element={<ContactDisplay/>}/>
        <Route path="/contactform/:id" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
