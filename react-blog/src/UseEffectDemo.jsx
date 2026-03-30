import { useState, useEffect, use } from 'react';

export const UseEffectDemo = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  function Call() {
    console.log('Call Counter:', counter);
  }
  function Call2() {
    console.log('Call Data:', data);
  }
  useEffect(() => {
    Call();
  }, [counter]);

  useEffect(() => {
    Call2();
  }, [data]);

  return (
    <div>
      <h1>UseEffectDemo Component</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter : <h1>{counter}</h1>
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Data: <h1>{data}</h1>
      </button>

      <button
        onClick={() => {
          setCounter(0);
          setData(0);
        }}
      >
        Reset All
      </button>
    </div>
  );
};
