import styled from "styled-components";

export const PackagereviewStyled = styled.div`
  width: 100%;

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .toast_container {
    width: 100%;
    height: 118px;
    background: #FFFFFF;
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
    border: medium none;

    .toast-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 5.625%;
      padding-right: 4.14%;

      .review_datalist {
        width: 78%;

        .review_datas {
          gap: 1rem;
          overflow-x: scroll;
          -ms-overflow-style: none; 
          scrollbar-width: none;  

          &::-webkit-scrollbar {
            display: none;
          }

          .review_data {
            position: relative;

            .review_content {
              display: inline-flex;
              flex-direction: column;
              justify-content: flex-start;
              background: #F1E6E6;
              width: 185px;
              padding: 8px 13px 0 13px;

              div {
                font-size: 16px;
                line-height: 24px;
                color: #000;
              }

              .review_text {
                min-height: 48px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }

            .review_deleteactions {
              position: absolute;
              top: 0;
              right: 0;

              .review_deletebtn {
                appearance: none;
                border: medium none;
                padding: 0;
                background: transparent;

                &:hover {
                  background: transparent;
                }
              }
            }
          }
        } 
      }

      .review_actions {
        width: 19.92%;
        text-align: right;

        .next-btn {
          border-radius: 10px;
          background: #9747ff;
          color: #fff;
          font-size: 14px;
          line-height: 21px;
          border: medium none;
          padding: 10px;
          width: 100%;
        }
      }
    }
  }

`;
