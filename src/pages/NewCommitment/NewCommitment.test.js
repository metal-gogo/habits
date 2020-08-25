import React from 'react';
import { cleanup, render } from '@testing-library/react';

import NewCommitment from './NewCommitment';

jest.mock('contexts/auth', () => ({
  useAuth: () => ({
    user: {
      displayName: 'Dummy Display Name',
    },
  }),
}));

jest.mock('dependencies/router/useNavigate', () => jest.fn());

afterEach(() => {
  cleanup();
});

describe('pages/NewCommitment', () => {
  it('renders the NewCommitment page', () => {
    const { container } = render((
      <NewCommitment />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/page/);
    expect(componentContainerElement.className).toMatch(/new-commitment/);
  });
});
