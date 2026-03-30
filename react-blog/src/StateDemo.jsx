import { useState, useEffect } from 'react';
import { CounterIncrement } from './Counter';

export const StateDemo = () => {
  let [fruit, setFruit] = useState('Apple');

  const changeFruit = () => {
    setFruit('Banana');
  };

  return (
    <div className="StateDemo">
      <h1>State Demo Component</h1>
      <button onClick={changeFruit}>Change Fruit :</button>
      <h1>{fruit}</h1>
      <CounterIncrement />
    </div>
  );
};
