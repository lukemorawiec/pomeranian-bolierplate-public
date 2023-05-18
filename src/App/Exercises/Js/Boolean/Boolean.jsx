import './styles.css';
import React, { useState } from 'react';

export function Boolean() {
  const [givenNumber, setGivenNumber] = useState();
  const [pole, setPole] = useState();

  const lessThanOne = 'Podana liczba jest mniejsza od 1.';
  const moreThanTen = 'Podana liczba jest większa od 10.';
  const oddNumber = 'Podana liczba jest nieparzysta.';

  const handleChange = (event) => {
    setGivenNumber(event.target.value);
    showResult(event.target.value);
  };

  function showResult(radius) {
    if (radius == '') {
      setPole('');
    } else if (radius < 1) {
      setPole(lessThanOne);
    } else if (radius > 10) {
      setPole(moreThanTen);
    } else if (!(radius % 2 == 0)) {
      setPole(oddNumber);
    } else {
      let result = calcAreaOfACircle(radius);
      setPole(result);
    }
  }

  function calcAreaOfACircle(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    let roundedArea = `Pole koła: ${area.toFixed(2)}`;
    return roundedArea;
  }

  return (
    <div>
      <h3>Wpisz liczbę od 1 do 10</h3>
      <input
        type="number"
        onChange={handleChange}
        value={givenNumber}
        min="1"
        max="10"
      />
      <p>{pole}</p>
    </div>
  );
}
