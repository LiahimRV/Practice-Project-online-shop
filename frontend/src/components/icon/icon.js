import styled from 'styled-components';

const IconContainer = ({
	className,
	id,
	color,
	hooverColor,
	transform,
	margin,
	onClick,
	...props
}) => (
	<div className={className} {...props} onClick={onClick}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '23px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ color = '#fff' }) => color};
	cursor: pointer;
	transition: color 0.2s ease, transform 0.2s ease;
	&:hover {
		color: ${({ hooverColor = '#ccc' }) => hooverColor};
		text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
		transform: ${({ transform = 'scale(1.1)' }) => transform};
	}
`;
