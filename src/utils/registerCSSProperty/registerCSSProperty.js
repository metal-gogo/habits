const registerCSSProperty = ({
  name,
  syntax,
  inherits,
  initialValue,
}) => {
  if ('registerProperty' in CSS) {
    CSS.registerProperty({
      name,
      syntax,
      inherits,
      initialValue,
    });
  }
};

export default registerCSSProperty;
