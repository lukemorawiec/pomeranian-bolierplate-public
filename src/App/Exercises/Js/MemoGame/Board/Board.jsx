import { useState } from 'react';
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
      isClicked: false,
    };
  });

  const mergedLetters = [...letters, ...letters];

  return shuffleArray(mergedLetters).map((obj, index) => {
    return { ...obj, id: index };
  });
};

export const Board = ({ boardSize }) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  console.log('board', board);

  return (
    <div className="board">
      {board.map((field) => {
        return (
          <div key={field.id} className="board-field">
            {field.value}
          </div>
        );
      })}
    </div>
  );
};
