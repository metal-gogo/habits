import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import StrokeCTA from './StrokeCTA';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('components/CTAs/StrokeCTA', () => {
  it('renders the StrokeCTA', () => {
    const childrenText = 'Some dummy text';
    const { container } = render((
      <StrokeCTA type="button">{childrenText}</StrokeCTA>
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/stroke-cta/);
  });

  it('has the `default-cta` and `stroke-cta` to make sure the styles are applied', () => {
    const childrenText = 'Some dummy text';
    const { container } = render((
      <StrokeCTA type="button">{childrenText}</StrokeCTA>
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/default-cta/);
    expect(componentContainerElement.className).toMatch(/stroke-cta/);
  });

  it('renders the text passed as children to the CTA', () => {
    const childrenText = 'Some dummy text';
    const { getByText } = render((
      <StrokeCTA type="button">{childrenText}</StrokeCTA>
    ));
    const ctaTextElement = getByText(childrenText);
    expect(ctaTextElement).toBeInTheDocument();
  });

  it('renders the component passed as children to the CTA', () => {
    const textInsideComponent = 'Some dummy component';
    const ChildrenComponent = () => (<>{textInsideComponent}</>);
    const { getByText } = render((
      <StrokeCTA type="button"><ChildrenComponent /></StrokeCTA>
    ));
    const ctaTextElement = getByText(textInsideComponent);
    expect(ctaTextElement).toBeInTheDocument();
  });

  it('calls the function passed as prop to the CTA', () => {
    const onClick = jest.fn();
    const children = 'Some dummy text';
    const { getByRole } = render((
      <StrokeCTA type="button" onClick={onClick}>{children}</StrokeCTA>
    ));
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
