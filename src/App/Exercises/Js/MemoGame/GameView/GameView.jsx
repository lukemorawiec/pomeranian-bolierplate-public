import { Button } from '../../HitTheMole/Button/Button';
import { Menu } from '../../HitTheMole/Menu/Menu';
import './GameView.css';

export const GameView = ({ stepAmount, time, myTime, stopButtonClick }) => {
  return (
    <>
      <Menu label="Czas gry">
        <div className="value-field">{myTime !== 0 ? myTime : time}</div>
      </Menu>
      <Menu label="Liczba ruchów">
        <div className="value-field">{stepAmount}</div>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => stopButtonClick()}>Stop</Button>
      </Menu>
    </>
  );
};
