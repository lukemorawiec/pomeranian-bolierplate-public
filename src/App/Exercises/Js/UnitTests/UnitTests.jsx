import { useState } from 'react';

export function roundResult(value) {
  return value.toFixed(2);
}

export function checkStatus(status) {
  return !status;
}

export function getResultAndStatus(value, checkStatusFn, status) {
  return {
    result: roundResult(value),
    status: checkStatusFn(status),
  };
}

export function UnitTests() {
  const [show, setShow] = useState(false);
  const result = 25.64356456;

  return (
    <div>
      <h1>Unit Tests</h1>
      <div className="result-value">result: {roundResult(result)}</div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Kliknij mnie
      </button>
      {show && <p>kliknięto</p>}
    </div>
  );
}
