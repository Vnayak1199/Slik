import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/jquery/dist/jquery.slim.js";
// import "../node_modules/popper.js/dist/umd/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer.jsx';
import Plan from './Components/Plan.jsx';
import Login from './Components/Login.jsx';
import Privacy from './Components/Privacy.jsx';
import Terms from './Components/Terms.jsx';
import Account from './Components/Account.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Privacy" element={<Privacy />} />
        <Route exact path="/Terms" element={<Terms />} />
        <Route exact path="/Account" element={<Account />} />
      </Routes>
      </BrowserRouter>
      <Plan />
      <Footer />
    </div>
  );
}

export default App;
