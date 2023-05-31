import { Button } from '../../HitTheMole/Button/Button';
import { Menu } from '../../HitTheMole/Menu/Menu';
import { SelectButtons } from '../../HitTheMole/SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="Rozmiar planszy">
        <SelectButtons
          options={[
            { label: '8 elementów', value: 8, isActive: true },
            { label: '16 elementów', value: 16, isActive: false },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};
