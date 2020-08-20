import React from 'react';
import { cleanup, render } from '@testing-library/react';

import TheHeader from './TheHeader';

jest.mock('contexts/auth', () => ({
  useAuth: () => ({
    logout: jest.fn,
  }),
}));

afterEach(() => {
  cleanup();
});

describe('components/TheHeader', () => {
  it('renders the TheHeader', () => {
    const { container } = render((
      <TheHeader />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/the-header/);
  });

  it('renders the DeleteCTA for this commitment card', () => {
    const { container } = render((
      <TheHeader />
    ));
    const logoutCTAElement = container.querySelector('button.the-header__logout-cta');
    expect(logoutCTAElement).toBeInTheDocument();
  });
});
