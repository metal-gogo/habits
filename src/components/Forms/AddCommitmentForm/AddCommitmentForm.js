import React from 'react';

import { useForm } from 'dependencies/react-hook-form';

import { useAuth } from 'contexts/auth';

import * as CommitmentsApi from 'api/commitments';

import './AddCommitmentForm.scss';

import Field from 'components/FormElements/Field';
import AreaField from 'components/FormElements/AreaField';
import FilledCTA from 'components/CTAs/FilledCTA';

const AddCommitmentForm = () => {
  const {
    register,
    errors,
    handleSubmit,
    formState,
    reset,
  } = useForm({ mode: 'onChange' });
  const { user } = useAuth();

  const showErrorOnFormMessage = formState.isSubmitted && !formState.isValid;

  const onSubmit = async (data) => {
    await CommitmentsApi.postCommitment(user.uid, {
      title: data.title,
      description: data.description,
      isHabitCreationCommitment: data.isHabitCreationCommitment,
    });
    reset();
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
      { showErrorOnFormMessage ? (
        <p className="add-commitment-form__error-message">
          Please check out the form information.
        </p>
      ) : null }
      <FilledCTA type="submit">Save</FilledCTA>
    </form>
  );
};

export default AddCommitmentForm;
