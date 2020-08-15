const startingPoint = 5;
const maxLength = 30;

const getRandomString = (stringLength) => Math.random().toString(36).substring(
  startingPoint, startingPoint + (stringLength % maxLength),
);

export default getRandomString;
