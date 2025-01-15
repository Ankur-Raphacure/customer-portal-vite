import styled from "styled-components";
export const RaphacureAppStyled = styled.div`
ul {
  list-style: none;
}
.bgBlue{
  background-color: #9747FF;
}
.txtWhite{
    color: #FFF;
}
.reverseFlex{
  flex-direction: row-reverse;
  .content-sec{
    padding-inline-start: unset !important;
    h1{
      color: #9747FF;
    }
    p{
      width: 572px;
    }
  }
  .img-sec{
    margin-left: 30px;
    .desktopInnerImg{
     right: 100px !important; 
    }
  }
}
  
.conatiner-sec{
  display: flex;
  div{
    flex-basis: 100%
  }
  .content-sec{
    padding-inline-start: 10%;
    h1{
      font-size: 32px;
      font-weight: 600;
      padding-bottom: 22px;
      padding-top: 33px;
      padding-inline-start: 17px;
      margin: unset;
    }
    p{
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 22px;
      padding-inline-start: 17px;
      margin: unset;
    }
    div{
      display: flex;
      gap: 4%;
      ul{
        padding: unset;
        li{
          font-size: 10px;
          padding-bottom: 14px;
          img{
              padding-right: 7px;
          }
        }
      }
    }
    img{
      cursor: pointer;
    }
  }
  .img-sec{
    display: flex;
    flex-direction: row;
    align-items: end;
    img{
      width: 90%;
      height: 100%;
    }
    .imgdiv{
      width: 435px;
      height: 320px;
      display: flex;
      justify-content: center;
      position: relative;
      .imageOne {
        position: relative;
       }
      .desktopInnerImg{
        width: 443px;
        position: absolute;
        top: 23px;
        right: 89px;
        bottom: 35px;
      } 
      .imageTwo { 
        width: 174px;
        position: absolute;
        top: 56px;
        right: 46px;
        bottom: 12px;
      } 
      .imageThree{
        width: 158px;
        position: absolute;
        top: 63px;
        right: 55px;
        bottom: 12px;
      }
        
    }
  }
}

@media only screen and  (max-width: 700px) {
  .conatiner-sec{
    width: 92%;
    display: block;
    margin: auto;
    .content-sec {
      padding-inline-start: 4%;
      p, h1{
        padding-inline-start: unset;
      }
      h1{
        text-align: center;
      }
      p{
        width: unset:
      }
      div{
        justify-content: center;
      }
    }
    .imgdiv{
      .desktopInnerImg{
        width: 318px !important;
        right: 62px !important;
      }
    }
  }
  .reverseFlex{
    .content-sec{
      padding-inline-start: 4% !important;
      p{
        width: unset !important;
      }
    }
    .imgdiv{
      .desktopInnerImg{
        width: 298px !important;
        right: 54px !important;
      }
    }
  }
}

`;