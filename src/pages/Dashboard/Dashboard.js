import React, { useEffect, useState } from 'react';

import { useAuth } from 'contexts/auth';

import * as CommitmentsApi from 'api/commitments';

import setVH100 from 'utils/setVH100/setVH100';

import './Dashboard.scss';

import CommitmentCard from 'components/CommitmentCard';
import AddCommitmentForm from 'components/Forms/AddCommitmentForm';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    setVH100();

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
        setCommitments(fetchedCommitments);
      });

    return () => unregisterCommitmentsObserver();
  }, [user.uid, setCommitments]);

  const renderCommitments = () => commitments.map((commitment) => (
    <CommitmentCard
      key={commitment.id}
      title={commitment.title}
      description={commitment.description}
      isHabitCreationCommitment={commitment.isHabitCreationCommitment}
    />
  ));

  return (
    <section className="page dashboard">
      <h1 className="dashboard__title">Your commitments:</h1>
      {renderCommitments()}
      <AddCommitmentForm />
      <button onClick={logout} type="button">Log out</button>
    </section>
  );
};

export default Dashboard;
