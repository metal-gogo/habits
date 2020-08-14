import addPaintModule from 'utils/addPaintModule';
import registerCSSProperty from 'utils/registerCSSProperty';

const bootstrapHoudini = () => {
  addPaintModule('bezel.js');
  registerCSSProperty({
    name: '--bezel-color',
    syntax: '<color>',
    inherits: true,
    initialValue: 'black',
  });
};

export default bootstrapHoudini;
