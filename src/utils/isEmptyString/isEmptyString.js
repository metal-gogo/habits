import {
  isEmpty,
  isString,
} from 'dependencies/lodash';

const isEmptyString = (str) => isString(str) && isEmpty(str);

export default isEmptyString;
