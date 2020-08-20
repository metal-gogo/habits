import { sortBy } from 'dependencies/lodash';

const sortCommitments = (commitments) => sortBy(commitments, ['createdAt.seconds']);

export default sortCommitments;
