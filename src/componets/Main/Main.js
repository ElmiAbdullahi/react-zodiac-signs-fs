import React from 'react';
import { zodiacs } from '../../zodiacs.js';
import Zodiac from '../Zodiac/Zodiac.js';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((sign) => (
        <Zodiac key={sign.id} {...sign} />
      ))}
      ;
    </main>
  );
}
