import React, { useEffect } from 'react';

import { useAuth } from 'contexts/auth';

import setVH100 from 'utils/setVH100/setVH100';

import './Dashboard.scss';

import AddCommitmentForm from 'components/Forms/AddCommitmentForm';

const Dashboard = () => {
  const { logout } = useAuth();

  useEffect(() => {
    setVH100();
  }, []);

  return (
    <section className="page dashboard">
      <button onClick={logout} type="button">Log out</button>
      <AddCommitmentForm />
    </section>
  );
};

export default Dashboard;
