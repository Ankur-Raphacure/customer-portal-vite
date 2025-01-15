import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import HArticle_2 from "../../assets/images/healtharticle/HArticle-2.png";

const CorsStyled = styled.div`
  background-color: #e2f4ee;
  border-radius: 10px;
  box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);

  .carousel-inner {
    width: 56vw;
    height: 56vh;
    margin-left: 0.5rem;

    @media (max-width: 768px) {
      width: 90vw;
      height: auto;
    }
  }

  .carousel a[role="button"] {
    height: fit-content;
    position: absolute;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: #9747ff;
    width: 2rem;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    top: 50%;

    @media (max-width: 768px) {
      width: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .carousel-item {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 38rem;
    margin-left: 3.2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-left: 0;
    }
  }

  .carousel-item img {
    width: 100%;
    height: 9rem;

    @media (max-width: 768px) {
      height: auto;
    }
  }

  .content {
    margin-top: 16px;
    text-align: center;

    .title {
      font-size: 11px;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 9px;
      }
    }

    .title-1 {
      font-size: 10px;

      @media (max-width: 768px) {
        font-size: 8px;
      }
    }

    .description {
      font-size: 12px;
      margin-top: 8px;
      text-align: left;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }

  .description-1 {
    display: flex;
    justify-content: space-between;
  }

  .text-justify {
    text-align: justify;
  }
`;

const CardDiv = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  padding: 19px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const images = [
  HArticle_2,
  HArticle_2,
  HArticle_2,
  HArticle_2,
  HArticle_2,
  HArticle_2,
  HArticle_2,
  HArticle_2,
  HArticle_2,
];

function SimilarBlogs() {
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    chunkedImages.push(images.slice(i, i + 3));
  }

  return (
    <CorsStyled>
      <Carousel fade>
        {chunkedImages.map((imageGroup, index) => (
          <Carousel.Item key={index}>
            {imageGroup.map((image, idx) => (
              <CardDiv key={idx}>
                <div className="image-container">
                  <img src={image} alt={`Carousel item ${idx}`} />
                </div>
                <div className="content">
                  <div className="description-1">
                    <div className="title">Dance & Aerobic</div>
                    <div className="title-1">20 Aug 2024</div>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    risus. Suspendisse.
                  </div>
                </div>
              </CardDiv>
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
    </CorsStyled>
  );
}

export default SimilarBlogs;
