import React, { useState } from 'react';
export const RadioDropdown = () => {
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('Tokyo');

  return (
    <div>
      <h1>Radio Dropdown Component</h1>
      <h1>Select Gender: </h1>
      <input
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        name="gender"
        id="male"
        value="male"
        checked={gender === 'male'}
      />
      <label htmlFor="male">Male</label>
      <input
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        name="gender"
        id="female"
        value="female"
        checked={gender === 'female'}
      />
      <label htmlFor="female">Female</label>

      <h1 style={{ color: 'green' }}>Selected Gender: {gender}</h1>
      <br />
      <br />
      <hr />

      <h1>Select City</h1>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={'Tokyo'}
        name="city"
        id="city"
      >
        <option value="newyork">New York</option>
        <option value="london">London</option>
        <option value="tokyo">Tokyo</option>
      </select>
      <h1 style={{ color: 'green' }}>Selected City: {city}</h1>
      <br />
      <br />
      <hr />
    </div>
  );
};
