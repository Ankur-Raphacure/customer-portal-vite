import styled from "styled-components";

export const HyperSitePageStyled = styled.div`
  /* padding: calc(40px + 2rem); */
  padding-top: unset;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .galleryPreview {
    padding: 0px 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 7fr;
    gap: 2rem;
  }
  .otherImages {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    .image:hover {
      border: 1px solid #000000;
      cursor: pointer;
      border-radius: 15px;
    }
  }

  .image {
    position: relative;
    /* border-radius: 15px; */
    overflow: hidden;
  }

  .image img {
    width: 100%;
    /* height: auto; */
    filter: brightness(0.6);
  }

  .imageOverlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;

    color: #ffffff;
    text-align: center;
    z-index: 2;
  }

  .imageOverlay::after {
    content: "";
    position: absolute;
    top: 80%;
    left: 50%;
    width: 50px;
    height: 2px;
    background-color: #ffffff;
    transform: translate(-50%, 100%);
  }

  div > img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    height: 100%;
  }
  .heroText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 40px;
    h1 {
      font-size: 42px;
      font-weight: 700;
      color: #000000;
    }
    button {
      background: #252b61;
      height: 64.7px;
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      border: none;
      border-radius: 32px;
    }
  }

  .view-all-btn {
    display: inline-block;
    float: right;
    text-decoration: underline;
    font-size: 22px;
    font-weight: 400;
    color: #252b61;
    border: none;
    background: none;
  }

  

  @media (max-width: 391px) {

    .multi-carousel-modal {
      display: none;
    }

    .specialization {
      .mobile-view {
        display: block;
      }

      .view-all-btn {
        display: none;
      }
    }

    .specialization {
      text-align: center;
      font-family: Arial, sans-serif;
    }

    .specialization-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .specialization p {
      display: none;
    }

    .specialization h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
      margin-bottom: unset;
    }

    .specialization-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-items: center;
    }

    .specialization-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      width: 100%;
      height: 100%;
      background: #fff7e9;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .specialization-image {
      width: 80%;
      height: auto;
      border-radius: 50%;
    }

    .specialization-name {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
    }

    .view-more {
      margin-top: 20px;
      font-size: 14px;
      background: none;
        border: none;
        color: #1e1e1e;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .head {
    display: none;
  }

  @media (max-width: 1024px) {
    .paragraph {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .galleryPreview {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }
    .otherImages {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: none;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .heroText {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .heroText h1 {
      font-size: 36px;
    }
    .heroText button {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .view {
      font-size: 18px;
      padding: 8px 20px;
    }

    .cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.8rem;
    }

    .card {
      padding: 0.8rem;
      /* width: 100%; */
    }

    .card-title {
      font-size: 18px;
    }

    .galleryPreview {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .otherImages {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: none;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .heroText h1 {
      font-size: 32px;
    }
    .heroText button {
      font-size: 16px;
      padding: 8px 20px;
    }
    .specialization .cards {
      display: block;
      width: 70%;
    }

    .specialization .card {
      margin-bottom: 1rem;
      text-align: center;
    }

    .specialization .card-image img {
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .paragraph {
      font-size: 0.9rem;
    }

    .galleryPreview {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .otherImages {
      /* display: flex; */
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 16px;
    }

    .view {
      font-size: 16px;
      padding: 6px 15px;
    }

    .cards {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }

    .card {
      padding: 0.5rem;
    }

    .card-title {
      font-size: 16px;
    }

    .component {
      gap: 2rem;
      padding: 20px;
    }
    .heroText h1 {
      font-size: 28px;
    }
    .heroText button {
      font-size: 14px;
      padding: 6px 15px;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }
  .viewAllBtn {
    width: 200px;
    background: #252b61;
    border: 1px solid #e2e2e2;
    height: 40px;
    border-radius: 8px;
    color: #fff;
  }

  @media (max-width: 391px) {
    gap: 2rem;
    .head {
      display: block;
    }
    .galleryPreview {
      padding: 0px 20px;
    }

    .currImage {
      height: 208px;
    }

    .otherImages {
      height: 65px;
      margin-top: unset;
    }

    .heroText h1 {
      display: none;
    }

    .head {
      position: absolute;
      margin-top: -4rem;
      
      h1 {
        color: white;
        margin-left: 50px;
        text-align: center;
        font-weight: 700;
        font-style: italic;
      }
    }

    .heroText button {
      margin-top: unset;
    }
  }
`;
