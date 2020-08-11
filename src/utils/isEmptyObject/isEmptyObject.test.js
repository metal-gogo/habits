import isEmptyObject from './isEmptyObject';

describe('isEmptyObject', () => {
  test('returns true if it is an object, and it is empty', () => {
    const emptyObject = {};

    expect(isEmptyObject(emptyObject)).toBeTruthy();
  });

  test('returns true if it is an empty array', () => {
    const emptyArray = [];

    expect(isEmptyObject(emptyArray)).toBeTruthy();
  });

  test('returns false if it is a string', () => {
    const falsyString = '';

    expect(isEmptyObject(falsyString)).toBeFalsy();
  });

  test('returns false if it is a number', () => {
    const falsyNumber = 0;

    expect(isEmptyObject(falsyNumber)).toBeFalsy();
  });

  test('returns false if it is an object, and it is not empty', () => {
    const object = {
      a: null,
    };

    expect(isEmptyObject(object)).toBeFalsy();
  });

  test('returns false if it is an array, and it is not empty', () => {
    const array = [null];

    expect(isEmptyObject(array)).toBeFalsy();
  });
});
