const addPaintModule = (moduleUrl) => {
  const version = process.env.REACT_APP_VERSION;
  if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(`${moduleUrl}?version=${version}`);
  }
};

export default addPaintModule;
