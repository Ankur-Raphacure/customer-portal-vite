import styled from "styled-components";

export const GalleryStyled = styled.div`
  text-align: left;
  padding: 2rem;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem;
    
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 2rem;
    
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    justify-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .gallery-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .gallery-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
