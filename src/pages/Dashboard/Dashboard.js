import React, { useEffect, useState } from 'react';

import { useAuth } from 'contexts/auth';

import * as CommitmentsApi from 'api/commitments';

import setVH100 from 'utils/setVH100/setVH100';

import './Dashboard.scss';

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
          fetchedCommitments.push(commitmentDocument);
        });
        setCommitments(fetchedCommitments);
      });

    return () => unregisterCommitmentsObserver();
  }, [user.uid, setCommitments]);

  console.log('commitments', commitments);

  return (
    <section className="page dashboard">
      <button onClick={logout} type="button">Log out</button>
      <AddCommitmentForm />
    </section>
  );
};

export default Dashboard;
