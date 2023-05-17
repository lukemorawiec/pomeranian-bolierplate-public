import './styles.css';

let result = 10;

for (let i = 1; i <= 5; i++) {
  result += i;
}

console.log(result);

export function Booleans() {
  const value1 = false;
  const value2 = true;
  const value3 = false;

  const condition = !(value1 || !value2 || value3);

  // console.log(condition);

  return (
    <div>
      Operatory logiczne
      {condition && <h1>TAJNY TEXT</h1>}
    </div>
  );
}
