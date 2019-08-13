import React from 'react';
import { Form, Field } from 'react-final-form';
import Container from './styled';


const AddForm = (props) => {
  // const addTask = (e) => {
  //     e.preventDefault();
  //     console.log(e.target);
  // }

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300);
    console.log(values);
    window.alert(JSON.stringify(values, 0, 2));
  }

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
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
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label>Description</label>
              <Field
                name="description"
                component="textarea"
                type="text-area"
                placeholder="Description"
              />
            </div>
            <button type="submit" disabled={submitting || pristine}>
                Submit
            </button>
          </form>
      )}
    />
  </Container>
  )
}

export default AddForm;
