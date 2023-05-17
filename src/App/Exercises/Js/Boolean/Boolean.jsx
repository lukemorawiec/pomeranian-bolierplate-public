import './styles.css';

export function Boolean() {
  const value1 = false;
  const value2 = true;
  const value3 = false;

  const condition = !(value1 || value2 || value3);
  console.log(condition);

  return (
    <div>
      Operatory logiczne
      {condition && <h1> TAJNY TEKST</h1>}
    </div>
  );
}
