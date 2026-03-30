import { useState } from 'react';

export const PropsDemo = ({ data }) => {
  console.log(data.name);
  return (
    <div>
      <h1>Props Demo</h1>
      <p>Name: {data.name}</p>
    </div>
  );
};
