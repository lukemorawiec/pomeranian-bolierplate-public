import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { SelectButtons } from '../SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted }) => {
  return (
    <>
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
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};
