import React from 'react';
import Input from './styled';
import { changeInputValue } from '../../actions/index';
import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';

const SearchInput = ({searchValue, changeInputValue}) => {
    return (
        <Input 
            type='text'
            placeholder='Search profile'
            value={searchValue}
            onChange={(e) => changeInputValue(e.target.value)}
            />
    )
};


const mapStateToProps = state => {
    return {
        searchValue: state.searchValue,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changeInputValue: value => changeInputValue(value),
}, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchInput);
