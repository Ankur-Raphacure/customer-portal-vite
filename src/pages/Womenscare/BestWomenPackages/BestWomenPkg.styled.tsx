import styled from "styled-components";

export const BestWomensPackagesStyled = styled.div`
  /* .list-packages-names-all {
    scroll-behavior: smooth;
    scrollbar-color: #9757ff #fff;
    background-attachment: scroll;
    display: flex;
    gap: 1.5rem;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  } */

  .list-packages-names-all {
    scroll-behavior: smooth;
    scrollbar-color: #9757ff #fff;
    background-attachment: scroll;
    display: grid;
    gap: 20px;
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr); /* Default: 4 columns */
  }

  @media (max-width: 1200px) {
    .list-packages-names-all {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for large screens */
    }
  }

  @media (max-width: 992px) {
    .list-packages-names-all {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }
  }

  @media (max-width: 576px) {
    .list-packages-names-all {
      grid-template-columns: 1fr; /* 1 column for small screens */
    }
  }

  .img-div {
    margin-top: 10px;
    width: 100%;
  }
  .img-line-div {
    margin-top: -1.9rem;
    margin-left: -1.3rem;
    width: 7rem;
  }
  .Title-div {
    width: 193px;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    opacity: 0.7;
  }
  .Sub-Title-div {
    width: 118px;
    position: relative;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    opacity: 0.6;
  }
  .amt-div {
    width: 49px;
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: #ff7a00;
    width: 6rem;
  }
  .t-list-div {
    width: 88px;
    position: relative;
    font-size: 10px;
    font-weight: 500;
    color: #000;
    opacity: 0.6;
    width: 6rem;
  }

  .cardstyle {
    height: auto;
    flex-shrink: 0;
    padding: 11px;
    border-radius: 15px;
    border: 2px #61ff00;
    background: linear-gradient(180deg, #e3fcee, #d4faff);
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.09);

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

  .cartbtn,
  .viewDetailsBtn {
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    background: #9747ff;
  }
  .viewDetailsBtn {
    background: white;
    color: #9747ff;
    outline: 1px solid #9747ff;
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
  .img-size {
    width: 120px;
    height: 120px;
    float: right;
    margin-right: 10px;
  }

  .btnWrapper {
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
  }
`;
