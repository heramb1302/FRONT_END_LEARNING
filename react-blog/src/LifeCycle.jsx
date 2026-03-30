import { useState, useEffect } from 'react';

export const LifeCycle = () => {
  const [data, setData] = useState('Initial Data');
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  useEffect(() => {
    console.log('Updating Data ...');
    console.log('Data updated:', data);
  }, [data]);

  useEffect(() => {
    console.log('Component unmounted');
  }, [toggle]);
  return (
    <div>
      <h1>LifeCycle Component</h1>
      {toggle && <p>{data}</p>}
      <button onClick={() => setData('Updated Data')}>Update Data</button>
      <button onClick={() => setToggle(!toggle)}>Toggle Component</button>
    </div>
  );
};
