import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { deleteCommitment } from 'api/commitments';

import CommitmentCard from './CommitmentCard';

jest.mock('api/commitments');

afterEach(() => {
  cleanup();
});

const getSampleCommitment = (
  { isHabitCreationCommitment } = { isHabitCreationCommitment: true },
) => ({
  id: 'dummy_id',
  title: 'Dummy title',
  description: 'Dummy description',
  isHabitCreationCommitment,
});

describe('components/CommitmentCard', () => {
  it('renders the CommitmentCard', () => {
    const commitment = getSampleCommitment();
    const { container } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const componentContainerElement = container.firstChild;
    expect(componentContainerElement.className).toMatch(/commitment-card/);
  });

  it('renders the title passed as prop', () => {
    const commitment = getSampleCommitment();
    const { getByText } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const title = getByText(commitment.title);
    expect(title).toBeInTheDocument();
  });

  it('renders the description passed as prop', () => {
    const commitment = getSampleCommitment();
    const { getByText } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText(commitment.description);
    expect(description).toBeInTheDocument();
  });

  it('renders "Making habit" if it receives `isHabitCreationCommitment = true` prop', () => {
    const commitment = getSampleCommitment({ isHabitCreationCommitment: true });
    const { getByText } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText('Making habit');
    expect(description).toBeInTheDocument();
  });

  it('renders "Losing habit" if it receives `isHabitCreationCommitment = false` prop', () => {
    const commitment = getSampleCommitment({ isHabitCreationCommitment: false });
    const { getByText } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const description = getByText('Losing habit');
    expect(description).toBeInTheDocument();
  });

  it('renders "Losing habit" if it does not receive the `isHabitCreationCommitment` prop', () => {
    const commitment = getSampleCommitment();
    const { getByText } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
      />
    ));
    const description = getByText('Losing habit');
    expect(description).toBeInTheDocument();
  });

  it('renders the DeleteCTA for this commitment card', () => {
    const commitment = getSampleCommitment();
    const { container } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const deleteCTAElement = container.querySelector('button.commitment-card__delete-cta');
    expect(deleteCTAElement).toBeInTheDocument();
  });

  it('calls the deleteCommitment method from the CommitmentsApi when the DeleteCTA is clicked', () => {
    const commitment = getSampleCommitment();
    const { container } = render((
      <CommitmentCard
        id={commitment.id}
        title={commitment.title}
        description={commitment.description}
        isHabitCreationCommitment={commitment.isHabitCreationCommitment}
      />
    ));
    const deleteCTAElement = container.querySelector('button.commitment-card__delete-cta');
    deleteCTAElement.click();
    expect(deleteCommitment).toHaveBeenCalledTimes(1);
  });
});
