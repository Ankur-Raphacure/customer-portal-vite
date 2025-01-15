import styled from "styled-components";

export const PackagesStyled = styled.div`
  .depends-user-box-all {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  .profile_imgwrap {
    width: 4.75rem;
    height: 90px;
    cursor: pointer;
    border-radius: 0.625rem;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 8px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
  }
  .profile_img {
    width: 2.25rem;
    height: 2.5rem;
    border-radius: 100%;
    margin: auto;
    object-fit: cover;
  }
  .profile_imgname {
    font-size: 0.625rem;
    margin-top: 0.5rem;
    color: #000;
  }
  .active_user {
    .profile_imgwrap {
      background: rgb(255, 111, 164);
    }
    .profile_imgname {
      color: rgb(255, 255, 255);
    }
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    text-align: left;
    display: inline-block;
    opacity: 0.7;
  }
  .list-cards-sec-all-dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 1.3rem;
    .secoundary-button1 {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      color: #9747ff;
      border-radius: 4px;
      //   background-color: #fff;
      border: 1px solid #9747ff;
      box-sizing: border-box;
      height: 50px;
      padding: 10px 30px;
      background: bottom;
    }
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
    /* padding-top: 8px; */
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
  .btnWrapper {
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
  }
  .checkboxDiv {
    display: flex;
    gap: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }

  .depends-user-box-all {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .depends-user-box {
    flex: 1 1 calc(25% - 20px);
    display: flex;
    justify-content: center;
  }
  .scanCeRow {
    overflow-x: scroll;
  }
  .list-cards-sec-all-dashboard {
    display: block !important;
  }
  .list-packages-names-all {
    overflow: scroll !important;
  }
`;
