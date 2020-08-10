import React from 'react';

import { useForm } from 'dependencies/react-hook-form';

import './AddCommitmentForm.scss';

import Field from 'components/FormElements/Field';
import AreaField from 'components/FormElements/AreaField';

const AddCommitmentForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('onSubmit data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-commitment-form">
      <Field
        id="title"
        name="title"
        type="text"
        labelTitle="Ttile"
        placeholder="Sleep earlier than 10 PM"
        errorMessage={errors.title?.message}
        ref={register({
          required: 'Please name your commitment.',
        })}
      />
      <AreaField
        id="description"
        name="description"
        type="text"
        labelTitle="Description"
        placeholder="Sleeping early is important whether you are a fully grown person or a teenager."
        errorMessage={errors.description?.message}
        ref={register({
          required: 'Please describe your commitment.',
        })}
      />
      <Field
        id="isHabitCreationCommitment"
        name="isHabitCreationCommitment"
        type="checkbox"
        labelTitle="Is habit creation commitment"
        ref={register}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddCommitmentForm;
