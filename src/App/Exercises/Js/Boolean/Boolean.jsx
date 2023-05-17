import './styles.css';
import React from 'react';

export function Boolean() {
  let age = 21;
  let hasDriverLicense = false;
  let hasCar = true;

  const condition1 = age >= 18 && hasDriverLicense && hasCar;
  const condition2 = age >= 18 && hasDriverLicense && !hasCar;
  const condition3 = age >= 18 && !hasDriverLicense && hasCar;

  function canDrive() {
    if (condition1) {
      return 'You can drive your car!';
    } else if (condition2) {
      return 'You can drive a rental car.';
    } else if (condition3) {
      return "You can't drive without a driver's license.";

      // if (age >= 18) {
      //   if (hasDriverLicense) {
      //     if (hasCar) {
      //       return 'You can drive your car!';
      //     } else {
      //       return 'You can drive a rental car.';
      //     }
      //   } else {
      //     return "You can't drive without a driver's license.";
      //   }
    } else {
      return 'You are too young to drive.';
    }
  }
  return <div>{canDrive()}</div>;
}
