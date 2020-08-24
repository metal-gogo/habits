import React, { useEffect, useState } from 'react';

import { useAuth } from 'contexts/auth';

import * as CommitmentsApi from 'api/commitments';

import './Dashboard.scss';

import CommitmentList from 'components/CommitmentList';

const Dashboard = () => {
  const { user } = useAuth();
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    const unregisterCommitmentsObserver = CommitmentsApi
      .getRealtimeCommitments(user.uid, (commitmentSnapshot) => {
        const fetchedCommitments = [];
        commitmentSnapshot.forEach((commitmentDocument) => {
          const commitment = {
            id: commitmentDocument.id,
            ...commitmentDocument.data(),
          };
          fetchedCommitments.push(commitment);
        });
        const sortedCommitments = CommitmentsApi.sortCommitments(fetchedCommitments);
        setCommitments(sortedCommitments);
      });

    return () => unregisterCommitmentsObserver();
  }, [user.uid, setCommitments]);

  return (
    <section className="page dashboard">
      <h1 className="dashboard__title">My commitments</h1>
      <CommitmentList commitments={commitments} />
    </section>
  );
};

export default Dashboard;
