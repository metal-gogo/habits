import React from 'react';
import PropTypes from 'prop-types';

import * as CommitmentsApi from 'api/commitments';

import './CommitmentCard.scss';

import IconCTA from 'components/CTAs/IconCTA';

const CommitmentCard = ({
  id, title, description, isHabitCreationCommitment,
}) => {
  const handleDelete = async () => {
    await CommitmentsApi.deleteCommitment(id);
  };

  return (
    <article className="commitment-card">
      <h3 className="commitment-card__title">
        { title }
      </h3>
      <p className="commitment-card__description">
        { description }
      </p>
      <small className="commitment-card__commitment-type">
        { isHabitCreationCommitment ? 'Making habit' : 'Losing habit' }
      </small>
      <IconCTA iconName="trash" onClick={handleDelete} className="commitment-card__delete-cta" />
    </article>
  );
};

CommitmentCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHabitCreationCommitment: PropTypes.bool,
};

CommitmentCard.defaultProps = {
  isHabitCreationCommitment: false,
};

export default CommitmentCard;
