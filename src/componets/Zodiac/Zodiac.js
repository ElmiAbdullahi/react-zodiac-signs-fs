import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac-container">
      <h1>{props.name}</h1>
      <img src={`/images/${props.name}.png`} />
      <h2>{props.dates}</h2>
      <p>{props.symbol}</p>
    </div>
  );
}
