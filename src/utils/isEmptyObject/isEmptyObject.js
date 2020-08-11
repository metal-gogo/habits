import {
  isEmpty,
  isObject,
} from 'dependencies/lodash';

const isEmptyObject = (object) => isObject(object) && isEmpty(object);

export default isEmptyObject;
