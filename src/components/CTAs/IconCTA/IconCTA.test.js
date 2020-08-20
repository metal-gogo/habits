import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import IconCTA, { ICON_TYPES } from './IconCTA';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('components/CTAs/IconCTA', () => {
  it('Renders the IconCTA', () => {
    const { container } = render((
      <IconCTA iconName={ICON_TYPES[0]} />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/icon-cta/);
  });

  it('Renders an icon inside the CTA for all the ICON_TYPES', () => {
    ICON_TYPES.forEach((iconType) => {
      const { container } = render((
        <IconCTA iconName={iconType} />
      ));
      const svgElement = container.querySelector('svg');
      expect(svgElement).toBeInTheDocument();
    });
  });

  it('Calls the function passed as prop to the CTA', () => {
    const onClick = jest.fn();
    const { getByRole } = render((
      <IconCTA onClick={onClick} iconName={ICON_TYPES[0]} />
    ));
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
