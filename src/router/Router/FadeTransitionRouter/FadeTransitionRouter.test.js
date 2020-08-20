import React from 'react';
import { cleanup, render } from '@testing-library/react';

import NotFound from 'pages/NotFound';

import FadeTransitionRouter from './FadeTransitionRouter';

afterEach(() => {
  cleanup();
});

it('Renders the Fade Transition Router', () => {
  const { container } = render((
    <FadeTransitionRouter>
      <NotFound default />
    </FadeTransitionRouter>
  ));
  const componentContainerElement = container.firstChild;
  expect(componentContainerElement.className).toBe('fade-transition-router');
});
