/* eslint-disable import/no-extraneous-dependencies */
import shuffle from 'lodash/shuffle';
/* eslint-enable import/no-extraneous-dependencies */
import sortCommitments from './sortCommitments';

describe('sortCommitments', () => {
  it('reorder the commitments by createdAt.seconds', () => {
    const orderedCommitments = [
      {
        createdAt: {
          seconds: 100,
        },
      },
      {
        createdAt: {
          seconds: 200,
        },
      },
      {
        createdAt: {
          seconds: 300,
        },
      },
      {
        createdAt: {
          seconds: 400,
        },
      },
    ];

    const shuffledCommitments = shuffle(orderedCommitments);
    const sortedCommitments = sortCommitments(shuffledCommitments);

    expect(sortedCommitments).toEqual(orderedCommitments);
  });
});
