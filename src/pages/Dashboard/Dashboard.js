import React from 'react';

import { useAuth } from 'contexts/auth';
// const user = useUser();
const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <section className="page dashboard">
      <h2>Dashboard route!!</h2>
      <button onClick={logout} type="button">Log out</button>
    </section>
  );
};

export default Dashboard;
