import React, { useEffect, useState } from 'react';
import './style.css';

export function SideEffects() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('value: ' + value);

    return () => {
      console.log('return useeffect value');
    };
  }, [value]);

  const [age, setAge] = useState(10);

  useEffect(() => {
    console.log(`age: ${age}`);

    return () => {
      console.log('return useeffect age');
    };
  }, [age]);

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
