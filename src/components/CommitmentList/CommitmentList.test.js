import React from 'react';
import { cleanup, render } from '@testing-library/react';

import CommitmentList from './CommitmentList';

afterEach(() => {
  cleanup();
});

describe('components/CommitmentList', () => {
  test('Renders the CommitmentList', () => {
    const commitments = [
      {
        id: 'dummy_id_1',
        title: 'Dummy title 1',
        description: 'Dummy description 1',
        isHabitCreationCommitment: true,
      },
      {
        id: 'dummy_id_2',
        title: 'Dummy title 2',
        description: 'Dummy description 2',
        isHabitCreationCommitment: true,
      },
    ];
    const { container } = render((
      <CommitmentList commitments={commitments} />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/commitment-list/);
  });

  test('Renders the CommitmentList empty space if there are no commitments', () => {
    const { container, getByText } = render((
      <CommitmentList />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/commitment-list/);
    const emptySpaceText = getByText('There are no commitments yet... You should add one!');
    expect(emptySpaceText).toBeInTheDocument();
  });
});
