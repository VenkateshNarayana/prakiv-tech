import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import  Home from "./pages/Home";
import  About from "./pages/About";
import  Services from "./pages/Services";
import  Contact from "./pages/Contact";
import NavItem from "./layout/NavItem";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <Router>
      <NavItem/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Services />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
