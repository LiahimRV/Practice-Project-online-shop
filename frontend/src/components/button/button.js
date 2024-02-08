import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, margin, height, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
  margin: ${({ margin = '8px 0 0 0' }) => margin} ;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '32px;' }) => height};

  border: none;
  background-color: #ff7f50;
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    opacity: 0.9;
  }
};`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
