import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import DefaultCTA from './DefaultCTA';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('components/CTAs/DefaultCTA', () => {
  it('renders the DefaultCTA', () => {
    const childrenText = 'Some dummy text';
    const { container } = render((
      <DefaultCTA type="button">{childrenText}</DefaultCTA>
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/default-cta/);
  });

  it('renders the text passed as children to the CTA', () => {
    const childrenText = 'Some dummy text';
    const { getByText } = render((
      <DefaultCTA type="button">{childrenText}</DefaultCTA>
    ));
    const ctaTextElement = getByText(childrenText);
    expect(ctaTextElement).toBeInTheDocument();
  });

  it('renders the component passed as children to the CTA', () => {
    const textInsideComponent = 'Some dummy component';
    const ChildrenComponent = () => (<>{textInsideComponent}</>);
    const { getByText } = render((
      <DefaultCTA type="button"><ChildrenComponent /></DefaultCTA>
    ));
    const ctaTextElement = getByText(textInsideComponent);
    expect(ctaTextElement).toBeInTheDocument();
  });

  it('calls the function passed as prop to the CTA', () => {
    const onClick = jest.fn();
    const children = 'Some dummy text';
    const { getByRole } = render((
      <DefaultCTA type="button" onClick={onClick}>{children}</DefaultCTA>
    ));
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
