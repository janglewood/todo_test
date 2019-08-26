import React from 'react';

const InputField = ({ data, type, placeholder, isRequired, component }) => (
  <div>
    <label>{placeholder}</label>
    {component === 'input' ?
      <input {...data.input} type={type} placeholder={placeholder} />
      :
      <textarea {...data.input} type={type} placeholder={placeholder} />
    }
    {isRequired ? data.meta.error && data.meta.touched && <span>{data.meta.error}</span> : null}
  </div>
);

export default InputField;