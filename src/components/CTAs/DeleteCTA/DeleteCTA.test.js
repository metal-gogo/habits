import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import DeleteCTA from './DeleteCTA';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('components/CTAs/DeleteCTA', () => {
  it('Renders the DeleteCTA', () => {
    const { container } = render((
      <DeleteCTA />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/delete-cta/);
  });

  it('Renders the delete icon inside the CTA', () => {
    const { container } = render((
      <DeleteCTA />
    ));
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('Calls the function passed as prop to the CTA', () => {
    const onClick = jest.fn();
    const { getByRole } = render((
      <DeleteCTA onClick={onClick} />
    ));
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
