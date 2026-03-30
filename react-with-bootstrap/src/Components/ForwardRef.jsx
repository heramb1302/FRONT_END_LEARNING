import { useRef } from 'react';
import { InputRefForward } from './InputRefForward';
export const Forwardref = () => {
  const inputRef = useRef(null);
  const updateRef = () => {
    inputRef.current.focus();
    inputRef.current.placeholder = 'Updated';
  };
  return (
    <div>
      <InputRefForward ref={inputRef} />
      <button onClick={updateRef}>Click me</button>
    </div>
  );
};
