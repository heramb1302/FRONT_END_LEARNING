import { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState('Loading...');
  const [color, setColor] = useState('black');
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Clock Component</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value={'red'}>Red</option>
        <option value={'green'}>Green</option>
        <option value={'blue'}>Blue</option>
      </select>
      <h2 style={{ color: color }}>Time: {time}</h2>
    </div>
  );
};
