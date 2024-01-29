import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookingForm from './components/bookingForm/BookingForm';
import Navbar from './components/common/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
