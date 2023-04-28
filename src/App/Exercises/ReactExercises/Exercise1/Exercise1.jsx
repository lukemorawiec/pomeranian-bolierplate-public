import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(1);
  const [text, setText] = useState('start');

  const handleClick = () => {
    if (clicks < 5) {
      setClicks(clicks + 1);
      setText('ilość kliknięć: ' + clicks);
    } else {
      setText('osiągnięto 5 kliknięć');
    }
  };

  return (
    <div>
      <p>{text}</p>

      <button className="exercise1-button" onClick={handleClick}>
        Click!
      </button>
    </div>
  );
}
