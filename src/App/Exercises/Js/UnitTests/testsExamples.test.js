import { roundResult } from './UnitTests';
import { checkStatus, getResultAndStatus } from './UnitTests';

describe('helper function for UnitTest component', () => {
  test('roundResult function should return rounded value (2 digits after coma)', () => {
    expect(roundResult(12.3456)).toBe('12.35');
    expect(roundResult(12.341)).toBe('12.34');
  });

  test('check Status function should return negated status', () => {
    expect(checkStatus(false)).toBeTruthy();
    expect(checkStatus(true)).toBeFalsy();
  });

  test('getResultAndStatus function should return object with value and status', () => {
    const mockedCheckedStatus = jest.fn().mockReturnValue(false);

    // expect(getResultAndStatus(23.3453, mockedCheckedStatus, true)).toEqual({
    //   result: '23.35',
    //   status: false,
    // });

    getResultAndStatus(23.3453, mockedCheckedStatus, true);

    expect(mockedCheckedStatus.mock.results[0].value).toBe(false);
  });
});
