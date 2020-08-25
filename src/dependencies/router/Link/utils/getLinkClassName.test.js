import getLinkClassName from './getLinkClassName';

describe('router/Link/utils/getLinkClassName', () => {
  it('returns an object with a property className', () => {
    const linkClassName = getLinkClassName();
    expect(linkClassName.className).toBeDefined();
  });

  it('has the `link` class on the className property', () => {
    const linkClassName = getLinkClassName();
    expect(linkClassName.className).toMatch(/link/);
  });

  it('has the `link--is-active` class on the className property if the `isActive` argument is true', () => {
    const linkClassName = getLinkClassName({ isActive: true });
    expect(linkClassName.className).toMatch(/link--is-active/);
  });

  it('includes the className passed as argument on the className property', () => {
    const linkClassName = getLinkClassName({ className: 'dummy-className' });
    expect(linkClassName.className).toMatch(/dummy-className/);
  });
});
