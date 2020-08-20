import removeEmptyOrNilValues from './removeEmptyOrNilValues';

describe('removeEmptyOrNilValues', () => {
  it('removes all keys with undefined values from the object', () => {
    const objectToTest = {
      a: undefined,
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };
    const expectedResult = {
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };

    expect(removeEmptyOrNilValues(objectToTest)).toEqual(expectedResult);
  });

  it('removes all keys with null values from the object', () => {
    const objectToTest = {
      a: null,
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };
    const expectedResult = {
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };

    expect(removeEmptyOrNilValues(objectToTest)).toEqual(expectedResult);
  });

  it('removes all keys with empty strings values from the object', () => {
    const objectToTest = {
      a: '',
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };
    const expectedResult = {
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };

    expect(removeEmptyOrNilValues(objectToTest)).toEqual(expectedResult);
  });

  it('removes all keys with empty object as values from the object', () => {
    const objectToTest = {
      a: {},
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };
    const expectedResult = {
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };

    expect(removeEmptyOrNilValues(objectToTest)).toEqual(expectedResult);
  });

  it('removes all keys with empty nil values from the object, even on nested objects', () => {
    const objectToTest = {
      a: {
        a: undefined,
        b: null,
        c: {},
      },
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };
    const expectedResult = {
      b: 'Something',
      c: 3,
      d: {
        a: 'a',
      },
    };

    expect(removeEmptyOrNilValues(objectToTest)).toEqual(expectedResult);
  });
});
