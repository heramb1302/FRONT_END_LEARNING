import { useState } from 'react';

export const ConditionalRendering = () => {
  let [count, setCount] = useState(0);

  const handleIncrease = () => {
    // If count is 4 (or more), reset it to 0
    if (count >= 4) {
      setCount(0);
    } else {
      // Otherwise, keep increasing
      setCount(count + 1);
    }
  };

  return (
    <div className="ConditionalRendering">
      {count === 0 ? (
        <h1>Count is Zero</h1>
      ) : count === 1 ? (
        <h1>Count is One</h1>
      ) : count === 2 ? (
        <h1>Count is Two</h1>
      ) : count === 3 ? (
        <h1>Count is Three</h1>
      ) : count === 4 ? (
        <h1>Count is Four</h1>
      ) : null}

      <button onClick={handleIncrease}>Increase Count Here!!</button>
    </div>
  );
};
