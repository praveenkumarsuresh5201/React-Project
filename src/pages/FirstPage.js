import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../component/Header';
import Home from '../component/Home';
import Company from '../component/Company';
// import GroupTours from '../component/GroupTours';
// import AdventureTrip from '../component/AdventureTrip';
import Package from '../component/Package';
import About from '../component/About';
// import Contact from '../component/Contact';

function FirstPage() {
  return (
    <Router>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="company">
        <Company />
      </div>
      {/* <div id="group-tours">
        <GroupTours />
      </div>
      <div id="adventure-trip">
        <AdventureTrip />
      </div> */}
      <div id="package">
        <Package />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
      <div id="about">
        <About/>
      </div>
    </Router>
  );
}

export default FirstPage;