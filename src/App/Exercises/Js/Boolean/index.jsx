import './styles.css';

let result = 10;

for (let i = 1; i <= 5; i++) {
  result += i;
}

console.log(result);

export function Booleans() {
  const p = true;
  const q = false;

  const condition1 = !(p && q);
  const condition2 = !p || !q;

  console.log(condition1 === condition2);

  return (
    <div>
      Operatory logiczne
      {condition1 && <h1>TAJNY TEXT</h1>}
    </div>
  );
}
