import { H2 } from '../h2/h2';
import { PROP_TYPE } from '../../constants';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 18px;
	padding: 120px;
`;

const ErrorMessage = styled.div`
	font-size: 30px;
	margin-top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<ErrorMessage>{error}</ErrorMessage>
		</Div>
	);

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
