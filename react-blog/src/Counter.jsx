import { useState } from 'react';
export const CounterIncrement = () => {
  let [countval, setcount] = useState(0);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <h1>Counter Increment Component</h1>
      <button onClick={() => setcount(countval * 55)}>
        CLick TO increment : {countval}{' '}
      </button>
      <button onClick={() => setcount(0)}>RESET</button>
    </div>
  );
};
