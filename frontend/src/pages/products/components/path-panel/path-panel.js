// Переделать
import styled from 'styled-components';

const PathPanelContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const PathPanel = styled(PathPanelContainer)`
	font-size: 18px;
	margin: 0 0 0 140px;
	color: rgb(105 105 105);
`;
