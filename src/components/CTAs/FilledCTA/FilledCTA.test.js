import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import FilledCTA from './FilledCTA';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('components/CTAs/FilledCTA', () => {
  it('renders the FilledCTA', () => {
    const childrenText = 'Some dummy text';
    const { container } = render((
      <FilledCTA type="button">{childrenText}</FilledCTA>
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/filled-cta/);
  });

  it('has the `default-cta` and `filled-cta` to make sure the styles are applied', () => {
    const childrenText = 'Some dummy text';
    const { container } = render((
      <FilledCTA type="button">{childrenText}</FilledCTA>
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/default-cta/);
    expect(componentContainerElement.className).toMatch(/filled-cta/);
  });

  it('renders the text passed as children to the CTA', () => {
    const childrenText = 'Some dummy text';
    const { getByText } = render((
      <FilledCTA type="button">{childrenText}</FilledCTA>
    ));
    const ctaTextElement = getByText(childrenText);
    expect(ctaTextElement).toBeInTheDocument();
  });

  it('renders the component passed as children to the CTA', () => {
    const textInsideComponent = 'Some dummy component';
    const ChildrenComponent = () => (<>{textInsideComponent}</>);
    const { getByText } = render((
      <FilledCTA type="button"><ChildrenComponent /></FilledCTA>
    ));
    const ctaTextElement = getByText(textInsideComponent);
    expect(ctaTextElement).toBeInTheDocument();
  });

  it('calls the function passed as prop to the CTA', () => {
    const onClick = jest.fn();
    const children = 'Some dummy text';
    const { getByRole } = render((
      <FilledCTA type="button" onClick={onClick}>{children}</FilledCTA>
    ));
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
