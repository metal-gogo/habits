const word = "[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*";
const block = word;
const element = `(?:__${word})?`;
const modifier = `(?:--${word})?`;
const bemPattern = `^\.${block}${element}${modifier}$`;

module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier"
  ],
  rules: {
    "selector-class-pattern": bemPattern,
    "selector-no-qualifying-type": [
      true, {
        "ignore": [ "attribute" ]
      }
    ],
    "string-quotes": "double",
    "max-nesting-depth": 2,
  }
}
