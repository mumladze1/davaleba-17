
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>David (Michelangelo)</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Michelangelo%27s_David_-_Restored.jpg/800px-Michelangelo%27s_David_-_Restored.jpg" alt="David (Michelangelo)"/>
      <p>Michelangelo's David is a masterpiece of Renaissance sculpture created by the Italian artist Michelangelo.</p>
      <div>
        <Link to="/about">
          <button>About</button>
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

export default Home;

