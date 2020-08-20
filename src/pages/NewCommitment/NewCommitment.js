import React, { useEffect } from 'react';

import setVH100 from 'utils/setVH100/setVH100';

import './NewCommitment.scss';

import AddCommitmentForm from 'components/Forms/AddCommitmentForm';

const NewCommitment = () => {
  useEffect(() => {
    setVH100();
  }, []);

  return (
    <section className="page new-commitment">
      <h1 className="new-commitment__title">New commitment</h1>
      <AddCommitmentForm />
    </section>
  );
};

export default NewCommitment;
