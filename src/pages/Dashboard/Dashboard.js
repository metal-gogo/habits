import React from 'react';

import { useAuth } from 'contexts/auth';

import './Dashboard.scss';

import AddCommitmentForm from 'components/Forms/AddCommitmentForm';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <section className="page dashboard">
      <h2>Dashboard route!!</h2>
      <button onClick={logout} type="button">Log out</button>
      <AddCommitmentForm />
    </section>
  );
};

export default Dashboard;
