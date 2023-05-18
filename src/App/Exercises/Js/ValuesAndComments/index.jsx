import { useState } from 'react';
import './styles.css';

const numbers = [2, 5, 7, 1, 8, 12];

const arr = ['źrebak', 'łąka', 'zegarek', 'auto', 'kanapa', 'placek'];

// --------------------------------------------------

const calculatePixels = (height, width) => {
  const parsedHeight = parseInt(height);
  const parsedWidth = parseInt(width);

  const calculation = parsedHeight * parsedWidth;

  return (calculation / 1000 / 1000).toFixed(2) + 'Mpx';
};

// console.log(calculatePixels('1080px', '1920px'));

// --------------------------------------------------

const getInfoAboutValue = (value) => {
  const type = typeof value;
  const logicValue = !!value;

  return `Typ wartości: ${type}\nwartość: ${value}\nwartość logiczna: ${
    logicValue ? 'True' : 'False'
  }`;
};

// console.log(getInfoAboutValue(undefined));
// console.log(getInfoAboutValue([]));
// console.log(getInfoAboutValue(null));
// console.log(getInfoAboutValue({}));
// console.log(getInfoAboutValue(['arr', 'ay']));
// console.log(getInfoAboutValue(123));
// console.log(getInfoAboutValue('abc'));

export function ValuesAndComments() {
  let initText = 'ala_ma_kota_a_tomek_ma_psa';

  const [text, setText] = useState(initText);

  const changeText = () => {
    const textWithSpaces = text.replaceAll('_', ' ');

    const firstLetterToUpperCase = textWithSpaces[0].toUpperCase();

    const textWithoutFirstLetter = textWithSpaces.substring(1);

    setText(firstLetterToUpperCase + textWithoutFirstLetter + '.');
  };

  const resetText = () => {
    setText(initText);
  };

  // ------------------------------------

  const BAD_WORD = 'kurde';
  const POLITE_WORD = 'kurczę';

  const [longText, setLongText] = useState('');

  const isContainingBadWord = longText.toLowerCase().indexOf(BAD_WORD) !== -1;

  const handleChange = (event) => {
    const trimmedValue = event.target.value.trim();
    setLongText(trimmedValue);
  };

  const parsedText = isContainingBadWord
    ? longText.replaceAll(BAD_WORD, POLITE_WORD)
    : longText;

  return (
    <div>
      <div style={{ fontSize: 30 }}>
        <p>
          Text: <b>{text}</b>
        </p>
        <button onClick={changeText}>Change text</button>
        <button onClick={resetText}>Reset text</button>
      </div>

      <hr />

      <div>
        {arr
          .sort((a, b) => {
            return a.localeCompare(b);
          })
          .join(',')}
      </div>
      <div>
        {numbers
          .sort((a, b) => a - b)
          .reverse()
          .join(',')}
      </div>

      <hr />

      <input onChange={handleChange} />

      {isContainingBadWord && (
        <p style={{ color: 'red' }}>TEXT ZOSTAŁ OCENZUROWANY</p>
      )}

      <p>{parsedText}</p>
    </div>
  );
}
