import './styles.css';

export function Booleans() {
  const value1 = 8;
  // const value2 = 2;
  // const value3 = 3;

  let result = false;

  // if (value1 === 1) {
  //   result = 'jeden';
  // } else if (value1 === 2) {
  //   result = 'dwa';
  // } else if (value1 === 3) {
  //   result = 'trzy';
  // } else {
  //   result = 'inna cyfra';
  // }

  // switch (value1) {
  //   case 1:
  //     result = 'jeden';
  //     break;
  //   case 2:
  //     result = 'dwa';
  //     break;
  //   case 3:
  //     result = 'trzy';
  //     break;
  //   default:
  //     result = 'inna cyfra';
  //     break;
  // }

  result = value1 >= 1 && value1 <= 3 ? 'mieści się w zakresie' : 'inna liczba';

  console.log(result);
  return <div>Operatory logiczne</div>;
}
