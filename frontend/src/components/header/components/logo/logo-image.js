import styled from "styled-components";

const StyledLogoImage = styled.img`
  height: 60px;
  border-radius: 50%;
  display: block;
  margin-top: 10px;
`;

export const LogoImage = () => (
  <a href="https://postimages.org/" target="">
    <StyledLogoImage
      src="https://i.postimg.cc/qRmwFjcv/favicon-white.png"
      border="0"
      alt="favicon-white"
    />
  </a>
);
