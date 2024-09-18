
// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About David (Michelangelo)</h1>
      <p>David is a marble statue created by Michelangelo between 1501 and 1504. It represents the Biblical hero David.</p>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/1">
          <button>Fact 1</button>
        </Link>
        <Link to="/2">
          <button>Fact 2</button>
        </Link>
        <Link to="/3">
          <button>Fact 3</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
