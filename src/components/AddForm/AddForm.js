import React from 'react';
import { Form, Field } from 'react-final-form';


const AddForm = (props) => {
  const addTask = (e) => {
      // props.submitHandler(e);
      e.preventDefault();
      console.log(e.target);
  }

  return (
    <Form
      onSubmit={addTask}
      initialValues={{ stooge: 'larry', employed: false }}
      render={({ addTask, form, submitting, pristine, values }) => (
        <form onSubmit={addTask}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          </form>
    )}
  />
  )
}

export default AddForm;
