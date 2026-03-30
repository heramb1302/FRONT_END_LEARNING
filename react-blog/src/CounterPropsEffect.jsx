import { useEffect } from 'react';

export const CounterPropsEffect = ({ counter = 0, data = 0 }) => {
  function handleCounter() {
    console.log('COUNTING STARTED...');
  }

  useEffect(() => {
    handleCounter();
  }, []);

  useEffect(() => {
    console.log('Counter Updated : ', counter);
  }, [counter]);
  useEffect(() => {
    console.log('Data Updated : ', data);
  }, [data]);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Data : {data}</h1>
    </div>
  );
};
