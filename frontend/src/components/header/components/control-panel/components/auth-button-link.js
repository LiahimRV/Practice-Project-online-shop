import styled from 'styled-components';

const AuthButtonLinkContainer = ({ children, className, handleClick }) => {
	return (
		<div className={className} onClick={handleClick}>
			{children}
		</div>
	);
};

export const AuthButtonLink = styled(AuthButtonLinkContainer)`
	color: #fff;
	margin: 0 5px;
	transition: color 0.2s ease, transform 0.2s ease;

	&:hover {
		cursor: pointer;
		border-bottom: 1px solid white;
		color: #ccc;
		text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
		transform: scale(1.1);
	}
`;
