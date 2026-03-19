import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MeetThePro from './components/MeetThePro';
import CoolingSolutions from './components/CoolingSolutions';
import Brands from './components/Brands';
import CoolCollections from './components/CoolCollections';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
import './components.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Hero />
        <Stats />
        <MeetThePro />
        <CoolingSolutions />
        <Brands />
        <CoolCollections />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;

