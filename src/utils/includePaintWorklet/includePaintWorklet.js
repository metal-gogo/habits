const includePaintWorklet = (moduleUrl) => {
  if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(`${moduleUrl}?v=1`);
  }
};

export default includePaintWorklet;
