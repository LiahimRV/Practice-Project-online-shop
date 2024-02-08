import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2Container = ({ children, className, margin, textAlign }) => (
	<h2 className={className}>{children}</h2>
);

export const H2 = styled(H2Container)`
	margin: ${({ margin = '40px 0 0 0' }) => margin};
	text-align: ${({ textAlign = '' }) => textAlign};
`;

H2.propTypes = {
	children: PropTypes.node.isRequired,
};
