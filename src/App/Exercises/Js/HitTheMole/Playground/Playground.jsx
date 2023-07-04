import { useState, useEffect } from 'react';
import { Mole } from '../../../../Components/Icons/Mole';
import './Playground.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

const fields = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
];

export const Playground = ({ score, setScore }) => {
  const [modifiedFields, setModifiedFields] = useState(fields);
  const [fieldWithMoleId, setFieldWithMoleId] = useState(getRandomInt(10));

  useEffect(() => {
    setInterval(() => {
      const newRadomIndex = getRandomInt(10);
      setFieldWithMoleId(newRadomIndex);
    }, 1000);
  }, []);

  const resetClickFlags = () => {
    setTimeout(() => {
      setModifiedFields(
        modifiedFields.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleScoreUpdate = (isMolePresentFlag) => {
    if (isMolePresentFlag) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleClick = (clickedField, isMolePresentFlag) => {
    // ustawienie stanu "czy kliknięte"
    setModifiedFields(
      modifiedFields.map((field) => {
        return {
          ...field,
          hasClicked: clickedField.id === field.id,
        };
      })
    );

    // reset stanu "czy kliknięte"
    resetClickFlags();

    // policzenie wyniku
    handleScoreUpdate(isMolePresentFlag);
  };

  return (
    <div className="playground">
      {modifiedFields.map((field) => {
        const isMolePresent = field.id === fieldWithMoleId;

        const isClickedFieldWithMole =
          isMolePresent && field.hasClicked ? ' field-green' : '';
        const isClickedFieldWithoutMole =
          !isMolePresent && field.hasClicked ? ' field-red' : '';

        return (
          <div
            className={`field${isClickedFieldWithMole}${isClickedFieldWithoutMole}`}
            key={field.id}
            onClick={() => handleClick(field, isMolePresent)}
          >
            {isMolePresent && <Mole />}
          </div>
        );
      })}
    </div>
  );
};
