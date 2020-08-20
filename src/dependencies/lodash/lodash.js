/*
 * lodash is imported from create-react-app,
 * but we don't have it on our project dependecies.
 * Therefore, eslint will complain about it */

/* eslint-disable import/no-extraneous-dependencies */
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import mapValues from 'lodash/mapValues';
import omitBy from 'lodash/omitBy';
import sortBy from 'lodash/sortBy';
/* eslint-enable import/no-extraneous-dependencies */

export {
  isEmpty,
  isNil,
  isObject,
  isString,
  mapValues,
  omitBy,
  sortBy,
};
