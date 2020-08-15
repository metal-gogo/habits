import React, { useEffect } from 'react';

import { StyledFirebaseAuth } from 'dependencies/react-firebaseui';

import setVH100 from 'utils/setVH100/setVH100';

import './Home.scss';

const Home = () => {
  useEffect(() => {
    setVH100();
  }, []);

  return (
    <section className="page home">
      <h1>Habits</h1>
      <StyledFirebaseAuth />
      <p>Make commitements to create great habits.</p>
    </section>
  );
};

export default Home;
