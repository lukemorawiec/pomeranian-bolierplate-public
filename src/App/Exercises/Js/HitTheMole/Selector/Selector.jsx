import { useState } from 'react';
import { Button } from '../Button/Button';

export const Selector = ({ options }) => {
  const [modifiedOptions, setModifiedOptions] = useState(options);

  const handleClick = (clickedButtonValue) => {
    setModifiedOptions(
      modifiedOptions.map((option) => {
        return {
          ...option,
          isActive: clickedButtonValue === option.value,
        };
      })
    );
  };

  return (
    <>
      {modifiedOptions.map((obj) => {
        const { value, label, isActive } = obj;
        return (
          <Button
            key={value}
            isActive={isActive}
            onClick={() => handleClick(value)}
          >
            {label}
          </Button>
        );
      })}
    </>
  );
};
