import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import HomeSlider from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Router basename='https://amcmillion3.github.io/la-casa-catracha'>
        <Routes>
          <Route path='/' element={<HomeSlider />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
