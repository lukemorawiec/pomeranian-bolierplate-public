import { SelectButtons } from './SelectButtons/SelectButtons';
import { Menu } from './Menu/Menu';
import './styles.css';
import { useState } from 'react';
import { Button } from './Button/Button';

export function HitTheMole() {
  return (
    <div className="hit-the-mole">
      <h4>Hit The Mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

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
      </Menu>
    </div>
  );
}
