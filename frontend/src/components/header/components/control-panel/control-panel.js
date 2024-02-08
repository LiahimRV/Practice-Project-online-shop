import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import { logout, resetProductCart } from '../../../../actions';
import { ROLE } from '../../../../constants';
import {
	selectUserRole,
	selectUserLogin,
	selectCart,
	selectUser,
} from '../../../../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AuthButtonLink, ItemsInCartCircle } from './components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 70px;
`;

const UserLogin = styled.div`
	margin-right: 5px;
`;

const ControlPanelContainer = ({ className, text }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const user = useSelector(selectUser);
	const items = useSelector(selectCart);

	const handleLogout = () => {
		dispatch(resetProductCart());
		dispatch(logout());
		sessionStorage.removeItem('userData');
		sessionStorage.removeItem('cartItems');
	};

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.ADMIN ? (
					<Link to="/products/edit">
						<Icon id="fa-pencil-square-o" margin="10px" />
					</Link>
				) : (
					<></>
				)}

				<Icon id="fa-backward" margin="8px" onClick={() => navigate(-1)} />
				{roleId === ROLE.GUEST ? (
					<></>
				) : (
					<div>
						<ItemsInCartCircle quantity={items.length} />

						<Link to={`/user-shopping-cart/${user.id}`}>
							<Icon id="fa-shopping-basket" margin="15px"></Icon>
						</Link>
					</div>
				)}

				{roleId === ROLE.GUEST ? (
					<>
						<AuthButtonLink as={Link} to="/login">
							Вход
						</AuthButtonLink>{' '}
						/{' '}
						<AuthButtonLink as={Link} to="/register">
							Регистрация
						</AuthButtonLink>
					</>
				) : (
					<>
						<UserLogin>{login}</UserLogin> /{' '}
						<AuthButtonLink handleClick={handleLogout}>
							{<Link to="/">Выход</Link>}
						</AuthButtonLink>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	& a {
		color: #fff;
	}
`;
