import {
  isNil,
  isObject,
  mapValues,
  omitBy,
} from 'dependencies/lodash';
import isEmptyObject from 'utils/isEmptyObject';
import isEmptyString from 'utils/isEmptyString';

const removeEmptyOrNilValues = (object) => {
  const tempObject = mapValues(object, (value) => {
    if (isObject(value)) {
      return removeEmptyOrNilValues(value);
    }

    return value;
  });

  return omitBy(tempObject, (value) => (
    isNil(value) || isEmptyString(value) || isEmptyObject(value)
  ));
};

export default removeEmptyOrNilValues;
