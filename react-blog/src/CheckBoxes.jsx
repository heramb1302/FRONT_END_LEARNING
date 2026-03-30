import { useState } from 'react';

export const CheckBoxes = () => {
  const [skills, setSkills] = useState([]);
  const handleChange = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <div>
      <h1>CheckBoxes Component</h1>
      <input onChange={handleChange} type="checkbox" id="php" value="PHP" />
      <label htmlFor="php">PHP</label>

      <input
        onChange={handleChange}
        type="checkbox"
        id="python"
        value="Python"
      />
      <label htmlFor="python">Python</label>
      <input onChange={handleChange} type="checkbox" id="java" value="Java" />
      <label htmlFor="java">Java</label>

      <h1>{skills.join(', ')}</h1>
    </div>
  );
};
