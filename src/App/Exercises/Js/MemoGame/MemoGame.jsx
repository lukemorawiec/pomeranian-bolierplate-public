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

  const [gameEnd, setGameEnd] = useState(false);

  const [timeInterval, setTimeInterval] = useState();

  const [myTime, setMyTime] = useState(0);

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

  const stopButtonClick = () => {
    setGameStarted(false);
    setStepAmount(0);
  };

  return (
    <div className="memo-game">
      {isGameStarted && !gameEnd && <p>gra w toku</p>}
      {gameEnd && isGameStarted && <h1>Wygrales! {myTime} sekund</h1>}
      {!isGameStarted && (
        <MenuView
          setGameStarted={setGameStarted}
          setBoardSize={setBoardSize}
          boardSize={boardSize}
        />
      )}
      {isGameStarted && (
        <GameView
          stopButtonClick={stopButtonClick}
          stepAmount={stepAmount}
          time={time}
          myTime={myTime}
        />
      )}

      {isGameStarted && (
        <Board
          boardSize={boardSize}
          stepAmount={stepAmount}
          setStepAmount={setStepAmount}
          setGameEnd={setGameEnd}
          time={time}
          setMyTime={setMyTime}
        />
      )}
    </div>
  );
}
