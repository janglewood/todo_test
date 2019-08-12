import React from 'react';
import AddInput from './AddInput/AddInput';
import AddButton from './AddButton/AddButton';

const AddField = (props) => {

  const addTask = (e) => {
    e.preventDefault();
    props.submitHandler(e);
  }

  return (
    <form onSubmit={addTask}>
      <AddInput />
      <AddButton />
    </form>
  )
}

export default AddField;
