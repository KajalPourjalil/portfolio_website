import { useState } from "react";
import React from "react";
import { NavBar } from "./Component/Navbar";
import { Banner } from "./Component/Banner"
import { Skills } from "./Component/Skills";
import { Projects } from './Component/Projects';
import { ContactForm } from "./Component/ContactForm";
import { Newsletter } from "./Component/Newsletter";
import { Footer } from "./Component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ContactForm />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
