import React from 'react';

import { StyledFirebaseAuth } from 'dependencies/react-firebaseui';

import './Home.scss';

const Home = () => (
  <section className="page home">
    <h1>Habits</h1>
    <StyledFirebaseAuth />
    <p>Make commitements to learn new gerat habits, or leave behind bad habits.</p>
  </section>
);

export default Home;
