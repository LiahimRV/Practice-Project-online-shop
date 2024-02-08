import { Link } from 'react-router-dom';
import { LogoImage } from './logo-image';
import styled from 'styled-components';

const TextBase = styled.span`
	font-weight: ${(props) => props.weight || 'normal'};
	font-size: ${(props) => props.size || '16px'};
	line-height: ${(props) => props.lineHeight || 'normal'};
	margin-left: 10px;
`;

const LargeText = styled(TextBase)`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;

`;

const SmallText = styled(TextBase)`
	font-size: 13px;
	font-weight: bold;
`;

const LogoLink = styled(Link)`
	display: flex;
	align-items: center;
	color: #fff;
	text-decoration: none;
	padding-bottom: 5px;
	margin-left: 70px;

	&:hover {
		text-decoration: none;
	}
`;

export const Logo = () => (
	<LogoLink to="/">
		<LogoImage />
		<LargeText>- shop</LargeText>
		<SmallText></SmallText>
	</LogoLink>
);
