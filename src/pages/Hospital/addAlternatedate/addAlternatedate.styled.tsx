import styled from "styled-components";

export const AddAlternatedateStyled = styled.div`
  .list-packages-names-all {
    scroll-behavior: smooth;
    scrollbar-color: #9757ff #fff;
    background-attachment: scroll;
    display: flex;
    overflow-x: scroll !important;
    gap: 1.5rem;
    max-width: 1320px;
  }
  #slider {
    width: 100%;
  }
  .cardstyle {
    width: 299px;
    height: auto;
    flex-shrink: 0;
    padding: 11px;
    border-radius: 15px;
    border: 1px solid rgba(0, 201, 170, 0.25);
    background: linear-gradient(180deg, #e3fcee 0%, #d4faff 100%);
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.09);

    h3 {
      color: #000;
      /* font-family: Poppins; */
      font-size: 14px;
      font-style: normal;
      font-weight: 600;

      line-height: normal;
      margin-top: 21px;
      opacity: 0.7;
    }

    p {
      color: #000;
      /* font-family: Poppins; */
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-top: 11px;
      opacity: 0.6;
    }
  }
  .flex {
    display: flex;
  }
  .btn-book-now {
    padding-top: 8px;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .img-content-sec {
    justify-content: space-between;
  }
  .price {
    color: #000;
    /* font-family: Poppins; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 11px;
    opacity: 0.4;
  }
  .final-price {
    color: #000;
    /* font-family: Poppins; */
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 11px;
    opacity: 0.6;
  }
  .rate {
    margin-top: 11px;
  }
  .stick-text {
    width: 54px;

    color: #fff;
    /* font-family: Poppins; */
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .primium-svg {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736499438251.png");
    height: 40px;
  }

  .img-size {
    width: 185px;
    height: 120px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .cartbtn {
    width: 280px;
    height: 42px;
    flex-shrink: 0;

    border-radius: 10px;
    background: #9747ff;
    margin: 0px;
    margin-top: 19px;
  }
  .m-t-5 {
    margin-top: 35px;
  }
  .check {
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 5px;
    margin-right: 10px;
  }
  .compare {
    margin-left: 10px;
  }
  input:checked ~ .checkmark {
    background-color: #9747ff;
  }
  .service {
    height: 40px;
  }
  .img-size {
    width: 120px;
    height: 120px;
    float: right;
    margin-right: 10px;
  }
  .border-line {
    height: 3px;
    width: 100%;
    margin: auto;
    margin-top: 120px;
    background: linear-gradient(
      90deg,
      rgb(255, 251, 242) 0%,
      rgb(254, 196, 38) 50%,
      rgb(255, 251, 242) 100%
    );
  }
`;
