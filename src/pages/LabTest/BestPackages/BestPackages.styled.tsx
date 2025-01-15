import styled from "styled-components";

export const BestPackagesStyled = styled.div`
  .list-packages-names-all {
    scroll-behavior: smooth;
    /* scrollbar-color: #9757ff #fff; */
    background-attachment: scroll;
    display: flex;
    /* overflow-x: scroll !important; */
    gap: 1.5rem;
    // max-width: 1320px;
  }
  .list-packages-names-alllabtest {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 14px;
    gap: 12px;
  }
  #slider {
    width: 100%;
  }
  .cardstyle {
    width: 290px;
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
  /* Add this to your CSS file or BestPackages.styled file */

  .compare-popup {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .compare-item {
    padding: 1rem;
    background: rgba(0, 201, 170, 0.05);
    border-radius: 4px;
    margin: 0 5px;
  }

  .compare-list {
    display: flex;
    flex-direction: row;
  }
  .compare-button,
  .disabled-button {
    padding: 5px 10px;
    background: #9445fa;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .compare-button:hover {
    background: #7a2fc4;
  }

  .disabled-button,
  .disabled-button:hover {
    background: rgba(148, 69, 250, 0.5);
  }

  .close-button,
  .close-button2 {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4d4d;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
  }

  .close-button:hover {
    background: #e60000;
  }

  .close-button2 {
    background: lightgray;
    font-size: 1rem;
    color: gray;
    position: static;
  }

  .comparison-details {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .comparison-item {
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    flex: 1 1 calc(33.333% - 40px);
    box-sizing: border-box;
    min-width: 250px;
  }

  .compare-popup,
  .comparison-details-popup {
    z-index: 1000;
  }

  .comparison-details-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .close-div {
    position: absolute;
    top: 150px;
    right: 190px;
    z-index: 2;
  }
  .close-btns-div {
    position: absolute;
    top: 52px;
    right: 190px;
    z-index: 2;
    font-size: 1.5rem;
  }
  .comparison-details {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 900px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  th,
  td {
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }

  thead {
    background-color: #e5e7eb; /* Tailwind gray-200 */
  }

  .comparison-item {
    background-color: #ecfeff; /* Tailwind cyan-100 */
  }

  .comparison-item:nth-child(2n) {
    background-color: #cffafe; /* Tailwind cyan-200 */
  }

  .book-now-button {
    background-color: #8b5cf6; /* Tailwind purple-500 */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .compare-popup {
      display: inline-grid;
    }
    .close-button2 {
      top: 0;
    }
    .comparison-details {
      overflow: scroll;
    }
    .list-packages-names-alllabtest {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 14px;
      gap: 12px;
    }
  }
  @media (max-width: 1024px) {
    .list-packages-names-alllabtest {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 14px;
      gap: 12px;
      overflow-x: scroll;
    }
    .cardstyle {
      width: 100%;
      height: auto;
      flex-shrink: 0;
      padding: 11px;
      border-radius: 15px;
      border: 1px solid rgba(0, 201, 170, 0.25);
      background: linear-gradient(180deg, #e3fcee 0%, #d4faff 100%);
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.09);
    }
  }
`;
