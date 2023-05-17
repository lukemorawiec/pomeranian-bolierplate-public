import './styles.css';
import { useState } from 'react';

const MESSAGES = {
  moreThanTen: 'Given number is too big',
  lessThanOne: 'Given number is too small',
  notEven: 'Given number is not an even number',
};

export function Booleans() {
  const [value, setValue] = useState();
  const parsedValue = Number(value);

  const calculateCircleArea = () => {
    const calculation = Math.PI * Math.pow(parsedValue, 2);
    return Math.round(calculation);
  };

  const getErrorMessage = () => {
    if (!isWithinLimits) {
      return biggerThenOne ? MESSAGES['moreThanTen'] : MESSAGES['lessThanOne'];
    }

    if (!isEven) {
      return MESSAGES['notEven'];
    }
  };

  const biggerThenOne = parsedValue >= 1;
  const smallerThanTen = parsedValue <= 10;
  const isWithinLimits = biggerThenOne && smallerThanTen;
  const isEven = parsedValue % 2 === 0;

  const isNumberReadyToCalculate = isWithinLimits && isEven;

  const isNumberGiven = !!value;

  const showResult = () => {
    return (
      <div>
        {isNumberReadyToCalculate ? (
          <h3>
            Circle area equals: {calculateCircleArea()}m<sup>2</sup>
          </h3>
        ) : (
          <div>
            <h4>Something is wrong!</h4>
            {getErrorMessage()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="boolean-exercises-container">
      <input
        type="number"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      meters
      {isNumberGiven ? showResult() : <h4>Give me a number :)</h4>}
    </div>
  );
}
