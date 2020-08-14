import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import DefaultCTA from './DefaultCTA';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test('Renders the DefaultCTA', () => {
  const childrenText = 'Some dummy text';
  const { container } = render((
    <DefaultCTA type="button">{childrenText}</DefaultCTA>
  ));
  const componentContainerElement = container.firstChild;
  expect(componentContainerElement.className).toMatch(/default-cta/);
});

test('Renders the text passed as children to the CTA', () => {
  const childrenText = 'Some dummy text';
  const { getByText } = render((
    <DefaultCTA type="button">{childrenText}</DefaultCTA>
  ));
  const ctaTextElement = getByText(childrenText);
  expect(ctaTextElement).toBeInTheDocument();
});

test('Renders the component passed as children to the CTA', () => {
  const textInsideComponent = 'Some dummy component';
  const ChildrenComponent = () => (<>{textInsideComponent}</>);
  const { getByText } = render((
    <DefaultCTA type="button"><ChildrenComponent /></DefaultCTA>
  ));
  const ctaTextElement = getByText(textInsideComponent);
  expect(ctaTextElement).toBeInTheDocument();
});

test('Calls the function passed as prop to the CTA', () => {
  const onClick = jest.fn();
  const children = 'Some dummy text';
  const { getByRole } = render((
    <DefaultCTA type="button" onClick={onClick}>{children}</DefaultCTA>
  ));
  const ctaTextButton = getByRole('button');
  fireEvent.click(ctaTextButton);
  expect(onClick).toHaveBeenCalledTimes(1);
});
