import React from 'react';

import { StyledFirebaseAuth } from 'dependencies/react-firebaseui';

import 'utils/setVH100';

import './Home.scss';

const Home = () => (
  <section className="page home">
    <h1>Habits</h1>
    <StyledFirebaseAuth />
    <p>Make commitements to grab great habits.</p>
  </section>
);

export default Home;
