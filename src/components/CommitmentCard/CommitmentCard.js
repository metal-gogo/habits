import React from 'react';
import PropTypes from 'prop-types';

const CommitmentCard = ({ title, description, isHabitCreationCommitment }) => (
  <article className="commitment-card">
    <h2 className="commitment-card__title">
      { title }
    </h2>
    <p className="commitment-card__description">
      { description }
    </p>
    <small className="commitment-card__commitment-type">
      { isHabitCreationCommitment ? 'Creating habit' : 'Leaving habit' }
    </small>
  </article>
);

CommitmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHabitCreationCommitment: PropTypes.bool,
};

CommitmentCard.defaultProps = {
  isHabitCreationCommitment: false,
};

export default CommitmentCard;
