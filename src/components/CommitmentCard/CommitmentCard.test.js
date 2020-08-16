import React from 'react';
import { cleanup, render } from '@testing-library/react';

import CommitmentCard from './CommitmentCard';

afterEach(() => {
  cleanup();
});

describe('components/CommitmentCard', () => {
  test('Renders the CommitmentCard', () => {
    const commitment = {
      title: 'Dummy title',
      description: 'Dummy description',
      isHabitCreationCommitment: true,
    };
    const { container } = render((
      <CommitmentCard
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/commitment-card/);
  });

  test('Renders the CommitmentCard title', () => {
    const commitment = {
      title: 'Dummy title',
      description: 'Dummy description',
      isHabitCreationCommitment: true,
    };
    const { getByText } = render((
      <CommitmentCard
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const title = getByText(commitment.title);
    expect(title).toBeInTheDocument();
  });

  test('Renders the CommitmentCard description', () => {
    const commitment = {
      title: 'Dummy title',
      description: 'Dummy description',
      isHabitCreationCommitment: true,
    };
    const { getByText } = render((
      <CommitmentCard
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText(commitment.description);
    expect(description).toBeInTheDocument();
  });

  test('Renders "Creating habit" if it receives `isHabitCreationCommitment = true` prop', () => {
    const commitment = {
      title: 'Dummy title',
      description: 'Dummy description',
      isHabitCreationCommitment: true,
    };
    const { getByText } = render((
      <CommitmentCard
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText('Creating habit');
    expect(description).toBeInTheDocument();
  });

  test('Renders "Leaving habit" if it receives `isHabitCreationCommitment = false` prop', () => {
    const commitment = {
      title: 'Dummy title',
      description: 'Dummy description',
      isHabitCreationCommitment: false,
    };
    const { getByText } = render((
      <CommitmentCard
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText('Leaving habit');
    expect(description).toBeInTheDocument();
  });

  test('Renders "Leaving habit" if it does not receive the `isHabitCreationCommitment` prop', () => {
    const commitment = {
      title: 'Dummy title',
      description: 'Dummy description',
    };
    const { getByText } = render((
      <CommitmentCard
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText('Leaving habit');
    expect(description).toBeInTheDocument();
  });
});
