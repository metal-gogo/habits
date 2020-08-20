import isEmptyString from './isEmptyString';

describe('isEmptyString', () => {
  it('returns true if it is a string, and it is empty', () => {
    const emptyString = '';

    expect(isEmptyString(emptyString)).toBeTruthy();
  });

  it('returns false if it is an object', () => {
    const emptyObject = {};

    expect(isEmptyString(emptyObject)).toBeFalsy();
  });

  it('returns false if it is an array', () => {
    const emptyArray = {};

    expect(isEmptyString(emptyArray)).toBeFalsy();
  });

  it('returns false if it is a number', () => {
    const number = 0;

    expect(isEmptyString(number)).toBeFalsy();
  });
});
