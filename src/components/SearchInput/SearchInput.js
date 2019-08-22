import React from 'react';
import Input from './styled';
import { changeInputValue } from '../../actions/index';
import { useDispatch } from 'react-redux';
import useSearchValueHook from '../../hooks/useSearchValueSelector';

const SearchInput = () => {
	const searchValue = useSearchValueHook();
	const dispatch = useDispatch();
	return (
		<Input
			type='text'
			placeholder='Search profile'
			value={searchValue}
			onChange={(e) => dispatch(changeInputValue(e.target.value))}
		/>
	)
};

export default SearchInput;
