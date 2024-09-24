import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Multiitem from './components/Multiitem';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
import './components/style.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Multiitem category="general" />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Multiitem category="business" />} />
          <Route path="/entertainment" element={<Multiitem category="entertainment" />} />
          <Route path="/health" element={<Multiitem category="health" />} />
          <Route path="/science" element={<Multiitem category="science" />} />
          <Route path="/sports" element={<Multiitem category="sports" />} />
          <Route path="/technology" element={<Multiitem category="technology" />} />
        </Routes>
      </Router>
    );
  }
}
