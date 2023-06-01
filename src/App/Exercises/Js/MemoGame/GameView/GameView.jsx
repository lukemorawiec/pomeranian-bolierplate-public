import { Button } from '../../HitTheMole/Button/Button';
import { Menu } from '../../HitTheMole/Menu/Menu';
import './GameView.css';

export const GameView = ({ setGameStarted, stepAmount, time }) => {
  return (
    <>
      <Menu label="Czas gry">
        <div className="value-field">{time}</div>
      </Menu>
      <Menu label="Liczba ruchów">
        <div className="value-field">{stepAmount}</div>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(false)}>Stop</Button>
      </Menu>
    </>
  );
};
