import styled from "styled-components";

export const RaphaPlusAssuranceStyled = styled.div`
  padding: 0rem 4.5rem;

  .wrapper {
    background-image: url(https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735196551049.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 3rem 4rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    aspect-ratio: auto;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 60%;
  }

  .content h2 {
    font-size: 36px;
    font-weight: 700;
    color: #202a3f;
    margin-bottom: 10px;
  }

  .content p {
    width: 617.5px;
    font-size: 18px;
    line-height: 27px;
    font-family: Inter;
    color: #3c4959;
    margin-bottom: 20px;
    margin-top: -21px;
  }

  .buttons {
    display: flex;
    gap: 24px;
  }

  .buttons button {
    padding: 0px 30px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }

  .buttons .free-trial {
    background-color: #252b61;
    color: white;
    text-wrap : nowrap;
    text-align: center;
    border-radius: 50px;
    border: 12px solid #252b61;
  }

  .buttons .book-demo {
    background-color: #EAEDFC;
    color: #252b61;
    border: 1px solid #252b61;
    /* width: 139px; */
  }

  .image {
    flex-shrink: 0;
    display: flex;
    margin-right: 40px;
  }

  .image img {
    width: 100%;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 297.3px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    .wrapper {
      background-image: none;
      background-color: #eaedfc;
    }

    .content {
      max-width: 100%;
      align-items: center;
    }
  }

  @media (max-width: 780px) {
    padding: 40px;

    .wrapper {
      padding: 2rem;
    }

    .content h2 {
      font-size: 1.5rem;
    }

    .buttons {
      flex-direction: column;
    }
  }

  @media (max-width: 391px) {
    padding: 1.25rem 1rem;
    position: relative;
    overflow: hidden;

    .wrapper {
      flex-direction: row;
      padding: 1rem;
      gap: 1.5rem;
      background-color: #eaedfc;
      text-align: center;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }

    .content h2 {
      width: 80%;
      font-size: 24px;
      line-height: 24px;
      margin-right: 60px;
      font-weight: 600;
      font-family: Inter;
      color: #202a3f;
      text-align: left;
    }

    .content p {
      width: 100%;
      margin-top: 10px;
      position: relative;
      font-size: 14px;
      line-height: 24px;
      font-family: Inter;
      color: #3c4959;
      text-align: left;
      display: inline-block;
    }

    .buttons {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    width: 90%;

    justify-content: center;
  }

  .buttons .free-trial,
  .buttons .book-demo {
    width: 100%;
    padding: 10px 10px;
    font-size: 0.9rem;
    text-align: center;
    border-radius: 25px;
    border: none;
  }

    .image {
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
    }

    .image img {
      object-fit: contain;
      height: 5rem;
      margin-top: -8rem;
      margin-left: 10rem;
    }
      
  }

    

`;
