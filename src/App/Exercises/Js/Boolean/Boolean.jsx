import './styles.css';

console.log(result);

export function Boolean() {
  const p = true;
  const q = false;

  const condition1 = !(p && q);
  const condition2 = !p || !q;

  console.log(condition1 === condition2);

  return (
    <div>
      Operatory logiczne
      {condition1 && <h1> TAJNY TEKST</h1>}
    </div>
  );
}
