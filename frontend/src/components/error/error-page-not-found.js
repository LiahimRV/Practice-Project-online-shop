import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNotFoundContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="error-text">
				<img
					className="error-text__img"
					src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
					alt="404"
				/>
				<span className="error-text__span">404 PAGE</span>
				<p className="error-text__pnf"> Такой страницы не существует...</p>
				<Link className="error-text__back-button" to="/">
					Вернуться на главную
				</Link>
			</div>
		</div>
	);
};

export const PageNotFound = styled(PageNotFoundContainer)`
	position: fixed;
	left: 0px;
	top: 0;
	width: 100%;
	height: 100%;
	line-height: 1.5em;
	z-index: 9999;

	& .error-text {
		font-size: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Shabnam', Tahoma, sans-serif;
		color: #000;
		direction: rtl;
	}

	& .error-text__img {
		margin: 85px auto 20px;
		height: 342px;
	}

	& .error-text__span {
		position: relative;
		font-size: 3.3em;
		font-weight: 900;
		margin-bottom: 50px;
	}
	& .error-text__pnf {
		font-size: 19px;
		margin: 30px 0 15px 0;
	}

	& .error-text__back-button {
		background: #fff;
		color: #000;
		font-size: 30px;
		text-decoration: none;
		margin: 2em auto 0;
		padding: 0.7em 2em;
		border-radius: 500px;
		box-shadow: 0 20px 70px 4px rgba(0, 0, 0, 0.1);
		font-weight: 900;
		transition: all 300ms ease;
	}
	& .error-text__back-button:hover {
		box-shadow: 0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0px 0 0 3px #000;
		cursor: pointer;
	}

	@font-face {
		font-family: Shabnam;
		src: url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot');
		src: url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot?#iefix')
				format('embedded-opentype'),
			url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff')
				format('woff'),
			url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff2')
				format('woff2'),
			url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.ttf')
				format('truetype');
		font-weight: bold;
	}
	@font-face {
		font-family: Shabnam;
		src: url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot');
		src: url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot?#iefix')
				format('embedded-opentype'),
			url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff')
				format('woff'),
			url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff2')
				format('woff2'),
			url('https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.ttf')
				format('truetype');
		font-weight: normal;
	}
`;
