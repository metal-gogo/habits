import React from 'react';

import { useAuth } from 'contexts/auth';

import 'utils/setVH100';

import './Dashboard.scss';

import AddCommitmentForm from 'components/Forms/AddCommitmentForm';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <section className="page dashboard">
      <button onClick={logout} type="button">Log out</button>
      <AddCommitmentForm />
    </section>
  );
};

export default Dashboard;
