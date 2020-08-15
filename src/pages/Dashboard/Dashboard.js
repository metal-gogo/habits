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
    const fetchCommitments = async () => {
      const fetchedCommitments = await CommitmentsApi.listCommitments(user.uid);
      setCommitments(fetchedCommitments);
    };

    setVH100();
    fetchCommitments();
  }, [user.uid]);

  console.log('commitments', commitments);

  return (
    <section className="page dashboard">
      <button onClick={logout} type="button">Log out</button>
      <AddCommitmentForm />
    </section>
  );
};

export default Dashboard;
