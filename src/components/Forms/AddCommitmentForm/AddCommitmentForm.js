import React from 'react';

import { useForm } from 'dependencies/react-hook-form';

import './AddCommitmentForm.scss';

import Field from 'components/FormElements/Field';
import AreaField from 'components/FormElements/AreaField';

const AddCommitmentForm = () => {
  const { register, handleSubmit } = useForm();

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
        ref={register}
      />
      <AreaField
        id="description"
        name="description"
        type="text"
        labelTitle="Description"
        placeholder="Sleeping early is important whether you are a fully grown person or a teenager."
        ref={register}
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

// {
//   "longestStreakCount": 1,
//   "isHabitCreationCommitment": true,
//   "currentStreakStartedAt": {
//     "seconds": 1596337200,
//     "nanoseconds": 0
//   },
//   "description": "Sleeping early is important whether you.",
//   "benefitsOfCommitment": [
//     "Protect the heart",
//     "Reduce the risk of cancer",
//     "Energy boost",
//     "Improvement in skin conditions"
//   ],
//   "lastCommitmentAt": {
//     "seconds": 1596337200,
//     "nanoseconds": 0
//   },
//   "commitmentCreatedAt": {
//     "seconds": 1596337200,
//     "nanoseconds": 0
//   },
//   "title": "Sleeping early"
// }
