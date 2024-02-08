import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthFormError, Button, H2, Input, Loader } from '../../components';
import { useResetForm } from '../../hooks';
import { setUser, setLoading } from '../../actions';
import { selectUserRole, selectLoader } from '../../selectors';
import styled from 'styled-components';
import { ROLE } from '../../constants';
import { request } from '../../utils/request';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются только латинские буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

const AuthContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const loading = useSelector(selectLoader);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		dispatch(setLoading(true));
		setServerError(null);

		request('/login', 'POST', { login, password }).then(({ error, user }) => {
			dispatch(setLoading(false));

			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			{loading ? (
				<div className="loader-container">
					<Loader />
				</div>
			) : (
				<>
					<H2>Авторизация</H2>

					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							type="text"
							placeholder="Логин..."
							{...register('login', {
								onChange: () => setServerError(null),
							})}
						/>
						<Input
							type="password"
							placeholder="Пароль..."
							{...register('password', {
								onChange: () => setServerError(null),
							})}
						/>
						<Button type="submit" disabled={!!formError}>
							Авторизоваться
						</Button>
						{loading && (
							<div className="loader-container">
								<Loader />
							</div>
						)}
						{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
					</form>
				</>
			)}
		</div>
	);
};

export const Auth = styled(AuthContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 120px;

	& > form {
		display: flex;
		flex-direction: column;
		margin-top: 15px;
		gap: 4px;
		width: 300px;
	}
`;
