import styled from "styled-components";

export const DashboardComponentStyled = styled.div`
  // font-family: Poppins;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
  .userDetails,
  .recentOrders {
    width: 100%;
  }
  .userDetails {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .borderShadow {
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  .recentOrders {
  }
  .pulseRate {
    padding: 1rem;
  }
  .selectContainer {
    display: flex;
    flex-direction: row;
  }
  .pulseRate {
    flex-direction: column;
  }
  .selectContainer select {
    width: fit-content;
    padding: 10px;
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;
    border: none;
    border-radius: 5px;
    position: relative;
  }
  .haemoglobin,
  .sugarLevels {
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .haemoglobin + h4,
  .sugarLevels + h4 {
    padding: 10px;
  }
  .haemoglobin + h4 > span,
  .sugarLevels + h4 > span {
    font-size: 0.5rem;
  }
  .levelsGraphs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .levelsGraphs .borderShadow,
  .healthInfo .borderShadow {
    height: fit-content;
  }
  .healthInfo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .healthItem {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: linear-gradient(to bottom, #f8f3ff, #ebfff0);
    border: 1px solid rgba(151, 71, 255, 0.2);
  }
  .healthItem .icon {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
  .healthIcon {
    color: #2896e5;
  }
  .icon p {
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    width: max-content;
  }
  .icon > p + div {
    margin: auto;
  }
  .icon h2 {
    font-size: 1.4rem;
    text-wrap: nowrap;
  }
  .icon h2 span {
    font-size: 1rem;
  }
  .userPic img {
    width: 100px;
    border-radius: 50%;
  }
  .userPic {
    padding: 1rem;
  }
  .userInfo {
    display: flex;
    flex-direction: row;
  }
  .infoDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .genderDiv {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .editBtn {
    color: #8884d8;
    font-weight: bold;
  }
  .icon > div {
    padding: 10px;
    border-radius: 50%;
    background-color: rgba(40, 150, 229, 0.2);
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 0 auto;
  }

  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background: none;
    padding: 10px;
    font-size: 16px;
  }

  .search-icon,
  .microphone-icon {
    color: #aaa;
    margin: 0 10px;
    cursor: pointer;
  }
  .separator {
    width: 1px;
    height: 24px;
    background-color: #ccc;
    margin: 0 10px;
  }
  .recentOrders {
    padding: 10px;
    height: max-content;
  }
  .recentOrders h2 {
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    .levelsGraphs {
      display: flex;
      flex-direction: column;
    }
    .healthInfo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
