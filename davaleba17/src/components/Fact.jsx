// src/components/Fact.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const facts = {
  1: "David was sculpted from a single block of marble.",
  2: "The statue was originally intended to be placed on the roof of the Florence Cathedral.",
  3: "Michelangelo's David is 17 feet tall."
};

const Fact = () => {
  const { factId } = useParams();
  const fact = facts[factId];

  return (
    <div>
      {fact ? (
        <div>
          <h1>Fact #{factId}</h1>
          <p>{fact}</p>
        </div>
      ) : (
        <div>
          <h1>Fact Not Found</h1>
          <p>The fact with the ID {factId} could not be found.</p>
        </div>
      )}
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
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

export default Fact;
