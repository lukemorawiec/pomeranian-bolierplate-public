import { useState } from 'react';
import { Mole } from '../../../../Components/Icons/Mole';
import './Playground.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

const fields = [
  { id: 1, isMolePresent: true, hasClicked: false },
  { id: 2, isMolePresent: false, hasClicked: false },
  { id: 3, isMolePresent: false, hasClicked: false },
  { id: 4, isMolePresent: false, hasClicked: false },
  { id: 5, isMolePresent: false, hasClicked: false },
  { id: 6, isMolePresent: false, hasClicked: false },
  { id: 7, isMolePresent: false, hasClicked: false },
  { id: 8, isMolePresent: false, hasClicked: false },
  { id: 9, isMolePresent: false, hasClicked: false },
  { id: 10, isMolePresent: false, hasClicked: false },
];

export const Playground = () => {
  const randomIndex = getRandomInt(10);

  const fieldsWithRandomIndex = fields.map((field) => {
    return {
      ...field,
      isMolePresent: field.id === randomIndex,
    };
  });

  const [modifiedFields, setModifiedFields] = useState(fieldsWithRandomIndex);

  const handleClick = (clickedId) => {
    setModifiedFields();
  };

  return (
    <div className="playground">
      {modifiedFields.map((field) => {
        return (
          <div className="field" key={field.id}>
            {field.isMolePresent && <Mole />}
          </div>
        );
      })}
    </div>
  );
};
