import styled from 'styled-components';

const ProductImageContainer = ({ className, alt, src, margin, height, width }) => {
	return <img alt={alt} src={src} className={className} />;
};

export const ProductImage = styled(ProductImageContainer)`
	margin: ${({ margin = '0 0 0 0' }) => margin};
	height: ${({ height = '300px' }) => height};
	width: ${({ width = '400px' }) => width};
	object-fit: cover;
	aspect-ratio: 400/300;
`;
