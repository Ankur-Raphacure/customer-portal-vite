// import styled from "styled-components";

// export const AbhaHealthStyled = styled.div`
//   .Container {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     padding: 40px;
//   }
//   .LeftSection {
//     flex: 1;
//     padding: 20px;
//   }
//   .RightSection {
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 22px;
//   }
//   .Title {
//     width: 457px;
//     position: relative;
//     font-size: 24px;
//     font-weight: 500;
//     color: #000;
//     text-align: left;
//     display: inline-block;
//     opacity: 0.8;
//   }
//   .Subtitle {
//     width: 477px;
//     font-size: 17px;
//     color: #000;
//     text-align: left;
//     display: inline-block;
//     opacity: 0.6;
//   }
//   .ImportantNotes {
//     margin-top: 3rem;
//     width: 368px;
//     position: relative;
//     font-size: 18px;
//     font-weight: 500;
//     color: #000;
//     text-align: left;
//     display: inline-block;
//     opacity: 0.8;
//   }
//   .Note {
//     margin: 7px 0;
//     width: 465px;
//     position: relative;
//     font-size: 15px;
//     font-family: Poppins;
//     color: #000;
//     text-align: left;
//     display: list-item;
//     opacity: 0.5;
//   }
//   .FormContainer {
//     background: #fff;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     max-width: 480px;
//     width: 100%;
//     height: 33rem;
//   }
//   .FormTitle {
//     margin-top: 1rem;
//     width: 435px;
//     position: relative;
//     font-size: 18px;
//     font-weight: 500;
//     color: #000;
//     text-align: center;
//     display: inline-block;
//     opacity: 0.8;
//   }
//   .FormSubtitle {
//     width: 435px;
//     position: relative;
//     font-size: 15px;
//     line-height: 58.8px;
//     font-weight: 500;
//     background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
//       linear-gradient(90deg, #9747ff, #00edff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 14px;
//   }
//   .FormSubtitle1 {
//     width: 435px;
//     margin-top: 0.5rem;
//     font-size: 14px;
//     color: #000;
//     text-align: center;
//     display: inline-block;
//     opacity: 0.5;
//   }
//   .ButtonGroup {
//     padding: 8px;
//     display: flex;
//     margin-top: 1rem;
//     margin-bottom: 20px;
//     padding: 2px;
//     border-radius: 5px;
//     background-color: #f6f9fd;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
//   .Bottomtitle {
//     font-size: 14px;
//     color: #000;
//     text-align: center;
//     opacity: 0.5;
//     display: flex;
//     justify-content: center;
//     margin-top: 1rem;
//     opacity: 0.5;
//     .Bottomsubtitle {
//       margin-left: 10px;
//       position: relative;
//       font-size: 14px;
//       font-weight: 500;
//       color: #9747ff;
//       text-align: center;
//       display: inline-block;
//     }
//   }
//   .Bottomtitle1 {
//     font-size: 16px;
//     font-weight: 500;
//     opacity: 0.5;
//     color: #000;
//     text-align: center;
//     opacity: 0.5;
//     display: flex;
//     justify-content: center;
//     .Bottomsubtitle1 {
//       margin-left: 10px;
//     }
//   }
//   .ContentBox {
//     display: flex;
//     justify-content: space-between;
//   }
//   .ContentBox {
//     display: flex;
//     justify-content: space-between;
//   }
//   .CheckboxLabel {
//     margin-top: 15px;
//     width: 217px;
//     position: relative;
//     font-size: 14px;
//     color: #000;
//     text-align: left;
//     display: inline-block;
//     opacity: 0.6;
//   }
//   .CheckboxLabel {
//     margin-top: 10px;
//     width: 359px;
//     position: relative;
//     font-size: 13px;
//     color: #000;
//     text-align: left;
//     display: inline-block;
//     opacity: 0.5;
//   }
//   .Buttonbox {
//     display: flex;
//     justify-content: center;
//     margin-top: 1.5rem;
//   }
//   .custom-btn {
//     background: #9747ff;
//     color: #ffffff;
//     width: 50%;
//   }
//   .custome-input {
//     flex: 1;
//     padding: 10px;
//     background-color: #f7f7f7;
//     text-align: center;
//     border: 1px solid #ddd;
//     border-radius: 5px;
//     margin-right: 10px;
//     width: 4rem;
//     height: 3rem;
//     &:last-child {
//       margin-right: 0;
//     }
//   }
//   .custome-ToggleButton {
//     flex: 1;
//     padding: 10px;
//     margin-right: 10px;
//     border: none;
//     border-radius: 5px;
//     background-color: ${(props: any) => (props.active ? "#fff" : "#f6f9fd")};
//     box-shadow: ${(props: any) =>
//       props.active ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
//     cursor: pointer;
//     &:last-child {
//       margin-right: 0;
//     }
//   }
// `;

import styled from "styled-components";

export const AbhaHealthStyled = styled.div`
  width: 100%;
  .Container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px;
  }

  .LeftSection,
  .RightSection {
    flex: 1;
    padding: 20px;
  }

  .RightSection {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px;
  }

  .Title {
    width: 457px;
    font-size: 24px;
    font-weight: 500;
    color: #000;
    text-align: left;
    opacity: 0.8;
  }

  .Subtitle {
    width: 477px;
    font-size: 17px;
    color: #000;
    text-align: left;
    opacity: 0.6;
  }

  .ImportantNotes {
    margin-top: 3rem;
    width: 368px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: left;
    opacity: 0.8;
  }

  .Note {
    margin: 7px 0;
    width: 465px;
    font-size: 15px;
    font-family: Poppins;
    color: #000;
    text-align: left;
    display: list-item;
    opacity: 0.5;
  }

  .FormContainer {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 480px;
    width: 100%;
    height: 33rem;
  }

  .FormTitle {
    margin-top: 1rem;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: center;
    opacity: 0.8;
  }

  .FormSubtitle {
    width: 100%;
    font-size: 15px;
    line-height: 58.8px;
    font-weight: 500;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      linear-gradient(90deg, #9747ff, #00edff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14px;
  }

  .FormSubtitle1 {
    width: 100%;
    margin-top: 0.5rem;
    font-size: 14px;
    color: #000;
    text-align: center;
    opacity: 0.5;
  }

  .ButtonGroup {
    padding: 8px;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 20px;
    padding: 2px;
    border-radius: 5px;
    background-color: #f6f9fd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .Bottomtitle {
    font-size: 14px;
    color: #000;
    text-align: center;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .Bottomsubtitle {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #9747ff;
      text-align: center;
    }
  }

  .Bottomtitle1 {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.5;
    color: #000;
    text-align: center;
    display: flex;
    justify-content: center;
    .Bottomsubtitle1 {
      margin-left: 10px;
    }
  }

  .ContentBox {
    display: flex;
    justify-content: space-between;
  }

  .CheckboxLabel {
    margin-top: 15px;
    width: 217px;
    font-size: 14px;
    color: #000;
    text-align: left;
    opacity: 0.6;
  }

  .Buttonbox {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .custom-btn {
    background: #9747ff;
    color: #ffffff;
    width: 50%;
  }

  .custome-input {
    flex: 1;
    padding: 10px;
    background-color: #f7f7f7;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    width: 4rem;
    height: 3rem;
  }
  .custome-ToggleButton {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${(props: any) => (props.active ? "#fff" : "#f6f9fd")};
    box-shadow: ${(props: any) =>
      props.active ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
    cursor: pointer;
  }

  // Media Queries for Responsiveness
  @media (max-width: 768px) {
    .Container {
      flex-direction: column;
      padding: 20px;
    }

    .LeftSection,
    .RightSection {
      width: 100%;
      padding: 10px;
    }

    .FormContainer {
      max-width: 100%;
      height: auto;
    }

    .Title,
    .Subtitle,
    .ImportantNotes,
    .Note {
      width: 100%;
      text-align: center;
    }

    .ButtonGroup {
      flex-direction: column;
      align-items: center;
    }

    .custome-input {
      width: 100%;
      margin-bottom: 10px;
    }

    .custom-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .FormTitle {
      font-size: 16px;
    }

    .FormSubtitle {
      font-size: 14px;
    }

    .ButtonGroup {
      flex-direction: column;
    }
  }
`;
