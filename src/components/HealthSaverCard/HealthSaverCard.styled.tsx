import styled from "styled-components";

export const HealthSaverCardStyled = styled.div`
  --text-color: #252b61;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);

  h2 {
    /* font-size: 1.2rem;
    font-weight: 500; */
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #141414;
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2; */
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  .imgWrapper {
    position: relative;
    min-height: 8rem;
    padding: 5px;
    @media screen and (max-width: 950px) {
      min-height: 10rem;
    }
    img {
      width: 100%;
    }
  }

  .logo {
    gap: 1rem;
    padding: 5px;

    img {
      object-fit: none;
    }
    h3 {
      color: #008080;
      font-weight: 500;
      font-size: 1rem;
    }
    h4 {
      color: #141414;
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .bottomSec {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .prices {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .realPrice {
        color: #d1d1d1;
        text-decoration: line-through;
        font-size: 1.2rem;
        font-weight: 400;
      }
      .discountedPrice {
        color: #141414;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
    button {
      background: #252b61;
      border-radius: 25px;
      border: none;
      color: #fff;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .textContent {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 0;
    align-items: center;
    @media screen and (max-width: 950px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .featureButton {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #a3dac2;
      border: none;
      padding: 0.8rem;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 300;
      cursor: pointer;
      transition: background 0.3s ease;
      text-wrap: nowrap;
      height: fit-content;

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      &:hover {
        background: #88c9a8;
      }

      &:nth-child(1) {
        background: #f2e09a;

        &:hover {
          background: #e5d488;
        }
      }
    }
  }

  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -1rem;
    .rectangle {
      width: 5rem;
      background: #89db7b;
      padding: 5px;
      border-radius: 10px 45px 45px 0;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }
  .tests {
    text-wrap: nowrap;
    align-items: center;
  }

  .more-labs-action-btns {
    display: flex;
    gap: 12px;
    padding: 1rem;
    button {
      width: 100%;
      height: 40px;
    }
    .details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
      border: none;
    }
  }
  button:disabled{
    opacity: 0.5;
  }
`;
