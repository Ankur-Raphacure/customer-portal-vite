import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(90deg, #5033e1 0%, #4a32e2 100%);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 20px;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  color: var(--Neutral-100, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px; /* 135.294% */
`;

const Description = styled.p`
  margin-top: 10px;
  color: var(--Neutral-300, #eff0f6);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
  letter-spacing: -0.28px;
`;

const ImageContainer = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const NetwokStyle = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Our Trusted Network of Healthcare Providers</Title>
        <Description>
          Discover our extensive network of partner healthcare providers,
          dedicated to delivering top-quality healthcare and advanced medical
          treatments. At RaphaCure, we are committed to ensuring that our
          technology is available where you need it most. Explore our network
          and find the best care near you.
        </Description>
      </TextContainer>
      <ImageContainer>
        <Image
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736505187160.png"
          alt="Network Illustration"
        />
      </ImageContainer>
    </Container>
  );
};

export default NetwokStyle;
