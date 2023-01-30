import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `URL(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          says={animal.says}
          type={animal.type}
          top={animal.top}
          left={animal.left}
        />
      ))}
    </main>
  );
}
