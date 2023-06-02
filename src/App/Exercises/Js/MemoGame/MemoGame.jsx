import './MemoGame.css';
import { useEffect, useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { Board } from './Board/Board';

export function MemoGame() {
  const [boardSize, setBoardSize] = useState(0);

  const [isGameStarted, setGameStarted] = useState(false);
  const [stepAmount, setStepAmount] = useState(0);
  const [time, setTime] = useState(0);

  const [timeInterval, setTimeInterval] = useState();

  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        setTime((prev) => {
          return prev + 1;
        });
      }, 1000);

      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTimeInterval();
      setTime(0);
    }
  }, [isGameStarted]);

  return (
    <div className="memo-game">
      {!isGameStarted && (
        <MenuView
          setGameStarted={setGameStarted}
          setBoardSize={setBoardSize}
          boardSize={boardSize}
        />
      )}
      {isGameStarted && (
        <GameView
          setGameStarted={setGameStarted}
          stepAmount={stepAmount}
          time={time}
        />
      )}

      {isGameStarted && (
        <Board
          boardSize={boardSize}
          stepAmount={stepAmount}
          setStepAmount={setStepAmount}
        />
      )}
    </div>
  );
}
