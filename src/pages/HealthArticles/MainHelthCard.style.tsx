import styled from "styled-components";

export const MainHealthCardStyled = styled.div`
  .heading-name-rating {
    // height: 24px;
    margin-top: 10px !important;
  }
  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
      margin-top: 12px;

    }
  }
  .cardstyle {
    width: 45rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .heading-name-rating h3 {
    margin-top: 3px;
  }
    .text-justify {
    text-align: justify;
    padding-left:0px;
}
    h3{
    margin:30px 0px 15px 0px;
    }
    .bottom-name{
    display:flex;
    justify-content: space-between;
    align-items: center;

    }
    .name-tag{
    padding-left:22px;
    }
`;
