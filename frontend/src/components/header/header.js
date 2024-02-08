import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className, search }) => {
	return (
		<header className={className}>
			<Logo />
			<ControlPanel />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	height: 100px;
	padding: 30px 90px;
	box-shadow: 0px -2px 17px #a9a9a9;
	background-color: #2d2c2c;
	color: #fff;
`;
