import React, { useState } from 'react';
import './style.css';

export function SideEffects() {
  const [value, setValue] = useState(0);

  const [age, setAge] = useState(10);

  return (
    <div className="side-effects">
      <button onClick={() => setValue(value + 1)}>Set Value</button>
      {value}
      <br />
      <br />
      <button onClick={() => setAge(age + 1)}>Set Age</button>
      {age}
    </div>
  );
}
