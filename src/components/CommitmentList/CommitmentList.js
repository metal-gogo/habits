import React from 'react';
import PropTypes from 'prop-types';

import './CommitmentList.scss';

import CommitmentCard from 'components/CommitmentCard';

const CommitmentList = ({ commitments }) => {
  const renderCommitmentList = () => (
    <ul className="commitment-list">
      {
        commitments.map((commitment) => (
          <li className="commitment-list__item" key={commitment.id}>
            <CommitmentCard
              title={commitment.title}
              description={commitment.description}
              isHabitCreationCommitment={commitment.isHabitCreationCommitment}
            />
          </li>
        ))
      }
    </ul>
  );

  const renderEmptyState = () => (
    <p className="commitment-list">There are no commitments yet... You should add one!</p>
  );

  return commitments.length > 0 ? renderCommitmentList() : renderEmptyState();
};

CommitmentList.propTypes = {
  commitments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isHabitCreationCommitment: PropTypes.bool,
  })),
};

CommitmentList.defaultProps = {
  commitments: [],
};

export default CommitmentList;
