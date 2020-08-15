import removeEmptyOrNilValues from 'utils/removeEmptyOrNilValues';

const composeCommitmentData = (commitment) => removeEmptyOrNilValues({
  userId: commitment.userId,
  title: commitment.title,
  description: commitment.description,
  benefits: commitment.benefits,
  isHabitCreationCommitment: commitment.isHabitCreationCommitment,
  currentStreakStartedAt: commitment.currentStreakStartedAt,
  lastCommitmentAt: commitment.lastCommitmentAt,
  longestStreakCount: commitment.longestStreakCount,
  createdAt: commitment.createdAt,
  updatedAt: commitment.updatedAt,
});

export default composeCommitmentData;
