import { useEffect, useState } from 'react';
import './Board.css';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const generateBoard = (size) => {
  const randomLetters = getRandomLetters(size / 2);

  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });

  const mergedLetters = [...letters, ...letters];

  return shuffleArray(mergedLetters).map((obj, index) => {
    return { ...obj, id: index + 1 };
  });
};

const FIELD_CLICK_RESET_DELAY = 800;

export const Board = ({ boardSize, stepAmount, setStepAmount }) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  console.log('board', board);

  const [firstClickedFieldId, setFirstClickedFieldId] = useState();
  const [secondClickedFieldId, setSecondClickedFieldId] = useState();

  useEffect(() => {
    if (firstClickedFieldId && secondClickedFieldId) {
      setStepAmount(stepAmount + 1);

      const firstClickedFieldValue = board.find(
        (item) => item.id === firstClickedFieldId
      ).value;

      const secondClickedFieldValue = board.find(
        (item) => item.id === secondClickedFieldId
      ).value;

      if (firstClickedFieldValue === secondClickedFieldValue) {
        setBoard(
          board.map((field) => {
            const isClickedFieldPaired =
              field.id === firstClickedFieldId ||
              field.id === secondClickedFieldId;

            return {
              ...field,
              isPaired: field.isPaired ? true : isClickedFieldPaired,
            };
          })
        );
      }
    }
  }, [firstClickedFieldId, secondClickedFieldId]);

  const resetFirstClickedFieldId = () => {
    setTimeout(() => {
      setFirstClickedFieldId(undefined);
    }, FIELD_CLICK_RESET_DELAY);
  };

  const resetSecondClickedFieldId = () => {
    setTimeout(() => {
      setSecondClickedFieldId(undefined);
    }, FIELD_CLICK_RESET_DELAY);
  };

  const handleClick = (obj) => {
    const isFirstClickedSetAndIsDifferentThanPrev =
      firstClickedFieldId && firstClickedFieldId !== obj.id;

    if (isFirstClickedSetAndIsDifferentThanPrev) {
      setSecondClickedFieldId(obj.id);
      resetSecondClickedFieldId();
    } else {
      setFirstClickedFieldId(obj.id);
      resetFirstClickedFieldId();
    }
  };

  return (
    <div className="board">
      {board.map((field) => {
        const isClicked =
          field.id === firstClickedFieldId || field.id === secondClickedFieldId;

        const clickedFieldClassName = isClicked ? 'field-clicked' : '';
        const pairedFieldClassName = field.isPaired ? 'field-paired' : '';

        const canShowValue = isClicked || field.isPaired;

        return (
          <div
            key={field.id}
            className={`board-field ${clickedFieldClassName} ${pairedFieldClassName}`}
            onClick={() => handleClick(field)}
          >
            {canShowValue && field.value}
          </div>
        );
      })}
    </div>
  );
};
