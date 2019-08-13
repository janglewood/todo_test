import React from 'react';
import { connect } from 'react-redux';
import Button from './styled';
import { wentToForm } from '../../../actions/index';

const AddButton = (props) => {
  return (
    <Button onClick={props.wentToFormAction}>Add</Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    wentToFormAction: () => dispatch(wentToForm()),
  }
};

export default connect(null, mapDispatchToProps)(AddButton);