const includePaintWorklet = (moduleUrl) => {
  if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(moduleUrl);
  }
};

export default includePaintWorklet;
