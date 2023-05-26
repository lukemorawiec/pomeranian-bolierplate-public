import { SelectButtons } from './SelectButtons/SelectButtons';
import { Menu } from './Menu/Menu';
import './styles.css';
import { useState } from 'react';
import { Button } from './Button/Button';
import { Selector } from './Selector/Selector';
import { Playground } from './Playground/Playground';

const timeButtons = [
  { value: 1, label: '1 minuta', isActive: false },
  { value: 2, label: '2 minuty', isActive: false },
  { value: 3, label: '3 minuty', isActive: true },
  { value: 4, label: '4 minuty', isActive: false },
];

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  console.log('czy gra jest wystartowana:', isGameStarted);

  return (
    <div className="hit-the-mole">
      <h4>Hit The Mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      <div className="settings-container">
        <div className="label">Czas gry</div>

        <Selector options={timeButtons} />
      </div>
      <div className="settings-container">
        <div className="label">Liczba kretów</div>

        <Selector
          heading="Czas gry"
          options={[
            { value: 1, label: '1 kret', isActive: true },
            { value: 2, label: '2 krety', isActive: false },
            { value: 3, label: '3 krety', isActive: false },
          ]}
        />
      </div>
      <div className="settings-container">
        <div className="label">Przyciski sterujące</div>

        {isGameStarted ? (
          <Button isActive onClick={() => setGameStarted(false)}>
            Stop
          </Button>
        ) : (
          <Button onClick={() => setGameStarted(true)}>Start</Button>
        )}
      </div>

      {isGameStarted && <Playground />}

      {/* <Menu label="testowy heading">
        <p>raz</p>
        <p>dwa</p>
        <p>trzy</p>
      </Menu>

      <Menu label="Czas gry">
        <SelectButtons
          options={[
            { label: '1 minuta', value: 1, isActive: true },
            { label: '2 minuty', value: 2, isActive: false },
            { label: '3 minuty', value: 3, isActive: false },
          ]}
        />
      </Menu>
      <Menu label="Liczba kretów">
        <SelectButtons
          options={[
            { label: '1 kret', value: 1, isActive: false },
            { label: '2 krety', value: 2, isActive: false },
            { label: '3 krety', value: 3, isActive: true },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button>Start</Button>
      </Menu> */}
    </div>
  );
}
