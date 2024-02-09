import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Header } from './components';
import { Auth, EditProducts, Main, Product, Registration, ShoppingCart } from './pages';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import styled from 'styled-components';
import { PageNotFound } from './components/error/error-page-not-found';

const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 1300px;
	min-height: 100%;
	margin: 0 auto;
`;

const PageContent = styled.div`
	padding: 120px 0 0 0;
`;

const MainContainer = styled.div`
	z-index: 9;
	box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.25);
	background: #ffffff;
	min-height: 80vh;
`;

export const OnlineStore = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	const isMainContainerVisible = !['/login', '/register'].includes(pathname);

	return (
		<Page>
			<Routes>
				<Route path="/login" element={<Auth />} />
				<Route path="/register" element={<Registration />} />
			</Routes>
			<PageContent>
				<Header />

				{isMainContainerVisible && (
					<MainContainer>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route
								path="/products/:id"
								element={<Product key={pathname} />}
							/>
							<Route path="/products/edit" element={<EditProducts />} />
							<Route
								path="/user-shopping-cart/:id"
								element={<ShoppingCart key={pathname} />}
							/>
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</MainContainer>
				)}
			</PageContent>
		</Page>
	);
};
