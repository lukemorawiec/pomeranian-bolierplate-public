import React, { useState, useEffect } from 'react';

import Slider from '@mui/material/Slider';

import Stack from '@mui/material/Stack';

import OutlinedInput from '@mui/material/OutlinedInput';

export const Sliders = () => {
  const [creditValue, setCreditValue] = useState(20000);

  const [creditDuration, setCreditDuration] = useState(24);

  const [rates, setRates] = useState(0);

  const [error, setError] = useState('');

  const STEP_CREDIT_VALUE = 500;
  const MIN_CREDIT_VALUE = 20000;
  const MAX_CREDIT_VALUE = 120000;

  const STEP_CREDIT_DURATION = 2;
  const MAX_CREDIT_DURATION = 48;
  const MIN_CREDIT_DURATION = 6;

  const calcRates = (creditValue, creditDuration) => {
    if (
      creditValue >= MIN_CREDIT_VALUE &&
      creditValue <= MAX_CREDIT_VALUE &&
      creditDuration >= MIN_CREDIT_DURATION &&
      creditDuration <= MAX_CREDIT_DURATION
    ) {
      setRates(Math.ceil(creditValue / creditDuration));
      setError('');
    } else {
      setError('Value out of range!');
    }
  };

  const handleCreditValueChange = (e) => {
    setCreditValue(e.target.value);
  };

  const handleCreditDurationChange = (e) => {
    setCreditDuration(e.target.value);
  };

  useEffect(() => {
    calcRates(creditValue, creditDuration);
  }, [creditValue, creditDuration]);

  return (
    <>
      <Slider
        aria-label="Selected amount"
        value={creditValue}
        valueLabelDisplay="auto"
        step={STEP_CREDIT_VALUE}
        marks
        min={MIN_CREDIT_VALUE}
        max={MAX_CREDIT_VALUE}
        onChange={handleCreditValueChange}
      />

      <OutlinedInput
        type="number"
        onChange={handleCreditValueChange}
        value={creditValue}
      />

      <Slider
        aria-label="Selected duration"
        value={creditDuration}
        valueLabelDisplay="auto"
        step={STEP_CREDIT_DURATION}
        marks
        min={MIN_CREDIT_DURATION}
        max={MAX_CREDIT_DURATION}
        onChange={handleCreditDurationChange}
      />

      <OutlinedInput
        type="number"
        onChange={handleCreditDurationChange}
        value={creditDuration}
      />
      <div>Your current rate is {rates}</div>
      <div>{error ? error : null}</div>
    </>
  );
};

export const MaterialUIBasicElements = () => {
  return (
    <Stack spacing={2} direction="row">
      <Sliders />
    </Stack>
  );
};
