import { Button } from '../../HitTheMole/Button/Button';
import { Menu } from '../../HitTheMole/Menu/Menu';
import { SelectButtons } from '../../HitTheMole/SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted, setBoardSize, boardSize }) => {
  return (
    <>
      <Menu label="Rozmiar planszy">
        <SelectButtons
          options={[
            { label: '2 elementy', value: 2, isActive: false },
            { label: '8 elementów', value: 8, isActive: false },
            { label: '16 elementów', value: 16, isActive: false },
            { label: '20 elementów', value: 20, isActive: false },
          ]}
          setValue={setBoardSize}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => setGameStarted(true)}
          isDisabled={boardSize === 0}
        >
          Start
        </Button>
      </Menu>
    </>
  );
};
