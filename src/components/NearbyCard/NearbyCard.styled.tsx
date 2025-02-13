import styled from "styled-components";

export const NearbyCardStyled = styled.div`
  --text-color: #252b61;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
  font-family: Outfit, sans-serif;

  .nearby-card {
    background: white;
    border-radius: 2rem;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 225px;
      object-fit: contain;
    }
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #141414;
    min-height: 45px;
  }

  .info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #a0c4ff; /* Light blue background for rating */
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: bold;
    width: fit-content;
    font-size: 14px;
  }

  .rating-icon {
    color: #ffffff;
  }

  .rating-value {
    margin: 0;
  }

  .distance {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #1e1e1e;
    font-size: 14px;
  }

  .location-icon {
    color: #1e1e1e;
    font-weight: 400;
  }

  .distance-value {
    margin: 0;
    font-weight: 500;
    span {
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    background: #fff;
    .nearby-card img {
      max-height: 65px;
    }
    .nearby-card {
      width: 15rem;
      border-radius: 14px;
    }
  }
`;
