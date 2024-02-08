import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return (
		<input
			className={className}
			{...props}
			ref={ref}
			autoComplete="current-password"
		/>
	);
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	padding: 10px;
	margin-top: 10px;
	cursor: pointer;
	transition: background 0.3s;
	border-radius: 3px;
	border: 1px solid #9e9e9e;
	box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
`;

Input.propTypes = {
	width: PropTypes.string,
};
