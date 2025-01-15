import styled from "styled-components";

export const DomiciliaryCareStyled = styled.div`
  width: 100%;
  background-color: #fff;
  scroll-behavior: smooth;
  img {
    width: 100%;
    height: 100%;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .scrollbar {
    scrollbar-color: #9757ff #fff;
  }
  .lab-test-data-content {
    padding: 0px 60px;
  }
  .labs-near-me-sec-header {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.9;
  }
  .top-category-sec {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .domci-header-sec {
    background: #fff;
    box-shadow: 2px 2px 19px #0000001a;
    padding: 13px 50px;
    display: flex;
    justify-content: space-between;

    .domci-header-sec-left {
      height: 60px;
      width: 120px;
      div {
        display: flex;
        gap: 0.25rem;
        img {
          object-fit: contain;
          border-radius: 0.5rem;
          height: 100%;
          max-width: 100%;
          margin-top: -28px;
        }
      }
    }
    .domci-header-sec-center {
      div {
        display: flex;
        gap: 16px;
        .query-sec {
          padding: 0.5rem;
          input {
            height: 50px;
            width: 450px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 2px 2px 19px #0000001a;
            border: 0;
            padding: 8px;
            outline: none;
            margin: 0;
            opacity: 0.9;
            font-weight: 400;
            font-size: 14px;
          }
          div {
            margin-left: -76px;
            margin-top: 14px;
            span {
              cursor: pointer;
              height: 15px;
              width: 15px;
              img {
                opacity: 0.5;
              }
            }
            .speackerIcon {
              img {
                opacity: 0.4;
              }
            }
          }
        }
        .location-btn-sec {
          padding-top: 8px;
          button {
            background: #fff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            color: #000 !important;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            height: 50px;
            padding: 0.5rem 1.5rem;
          }
        }
      }
    }
    .domci-header-sec-right {
      display: flex;
      align-items: center;
      button {
        background: #9747ff;
        border-radius: 10px;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        height: 42px;
        line-height: normal;
        width: 92px;
        border: unset;
      }
    }
  }
  .content-sec {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .patient-moni-sec {
      width: 586px;
      height: 152px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 44px;
      img {
        border-radius: 0.5rem;
      }
    }
    .two-img-sec {
      display: flex;
      gap: 2rem;
      justify-content: space-between;
      margin-top: 20px;
      .two-img-sec-one {
        height: 100%;
        background-color: #078c5f;
        padding: 4px;
        border-radius: 10px;
        text-align: end;
        img {
          cursor: pointer;
        }
        button {
          background-color: #fff;
          border: unset;
          border-radius: 10px;
          padding: 6px 10px;
        }
      }
      .two-img-sec-two {
        height: 100%;
        background-color: #ffbd59;
        padding: 4px;
        border-radius: 10px;
        text-align: end;
        img {
          cursor: pointer;
        }
        button {
          background-color: #fff;
          border: unset;
          border-radius: 10px;
          padding: 6px 10px;
        }
      }
    }
    .third-img-sec {
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: #cb6ce6;
      padding: 4px;
      border-radius: 10px;
      text-align: end;
      img {
        cursor: pointer;
      }
      div {
        button {
          background-color: #fff;
          border: unset;
          border-radius: 10px;
          padding: 6px 10px;
        }
      }
    }
    .fourth-img-sec {
      display: flex;
      gap: 1rem;
      margin-bottom: 30px;
      button {
        background-color: #fff;
        border: unset;
        border-radius: 10px;
        padding: 6px 10px;
      }
      .first-img {
        background-color: #0cc0df;
        padding: 4px;
        border-radius: 10px;
      }
      .second-img {
        background-color: #ff5757;
        padding: 4px;
        border-radius: 10px;
      }
      .third-img {
        background-color: #004aad;
        padding: 4px;
        border-radius: 10px;
      }
    }
  }
  .Rapha-protect-sec {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
    div {
      background-color: #dfedff;
    }
    p {
      margin-bottom: 0px;
    }
    .protect-txt-sec {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      border-radius: 5px;
    }
    .img-div {
      border-radius: 10px;
      box-shadow: 2px 4px 14px 0 #00000026;
      padding: 0.5rem;
    }
    .subp-txt {
      p {
        font-size: 1.5rem;
        font-weight: bolder;
      }
      h5 {
        font-size: 15px;
        font-weight: inherit;
        margin: 0px;
        margin-top: 10px;
        color: #000;
        font-weight: 400;
      }
    }
    .book-sec {
      display: flex;
      gap: 11rem;
      align-items: center;
      p {
        font-size: 15px;
        font-weight: inherit;
        margin: 0px;
        margin-top: 10px;
        color: #000;
        font-weight: 400;
      }
      button {
        border: unset;
        background-color: #002454;
        color: #fff;
        padding: 9px 16px;
        border-radius: 7px;
      }
    }
    .protect-btns-sec {
      background-color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
      a {
        width: 100%;
        border: unset;
        background-color: #dfedff;
        color: #000;
        padding: 9px 16px;
        border-radius: 10px;
        box-shadow: 2px 4px 14px 0 #00000026;
        text-align: center;
        text-decoration: none;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .domci-header-sec {
      margin: auto;
      width: 95%;
      margin-top: 15px;
      padding: 0px;
      .domci-header-sec-left div img {
        margin-top: 0px;
      }
      .domci-header-sec-center {
        display: none;
      }
    }
    .content-sec {
      width: 95%;
      .patient-moni-sec {
        width: 100%;
      }
      .two-img-sec {
        flex-direction: column;
      }
      .fourth-img-sec {
        flex-direction: column;
      }
    }
    .Rapha-protect-sec {
      .protect-txt-sec {
        .book-sec {
          gap: 0.5rem;
        }
      }
      .protect-btns-sec {
        flex-direction: column;
        justify-content: unset;
        gap: 0.5rem;
        button {
        }
      }
    }
  }
`;
