import styled from "styled-components";

export const ActivitiesStyled = styled.div`
  .activities-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    /* padding: 0 15px; */
  }

  .nav-tabs {
    border-bottom: none;
  }

  .nav-link {
    color: #808080;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .nav-link.active {
    color: #9747ff;
    border-bottom: 2px solid #9747ff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .btn-calculate-bmi {
    color: #f6f9fd;
    border-radius: 2px;
    background: #9747ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    padding: 8px 10px;

    align-self: flex-end;
    margin-top: 10px;
  }

  .tab-content {
    width: 100%;
  }
  .fitness-track-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* padding: 20px; */
    border-radius: 10px;
  }

  .fitness-track {
    flex: 1;
    max-width: 300px;
    background-color: #fff;
    padding: 20px;
  }

  .metric {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .metric:last-child {
    border-bottom: none;
  }

  .metric-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .metric-icon::before {
    content: "";
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    background-color: #fff;
  }

  .metric-icon .inner-icon {
    width: 26px; /* Adjust the size according to your icon size */
    height: 30px;
    z-index: 3;
    position: absolute;
  }

  .calories-icon {
    background: conic-gradient(#ff9800 0% 75%, #e0e0e0 75% 100%);
  }

  .bpm-icon {
    background: conic-gradient(#ff5252 0% 75%, #e0e0e0 75% 100%);
  }

  .water-icon {
    background: conic-gradient(#42a5f5 0% 75%, #e0e0e0 75% 100%);
  }

  .metric-info {
    flex: 1;
    padding-left: 15px;
  }

  .metric-label {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .metric-value {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .chart-container {
    flex: 2;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .chart-title {
    margin-bottom: 20px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
  }
  .chart-para {
    color: #313131;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }
  .chart-para svg {
    width: 15px;
    height: 15px;
  }

  .fitness-goals-container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 30px;
    /* justify-content: center; */
  }

  .goal-card {
    background: #b5e9ff;
    width: 210px;
    padding: 12px;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #aae0ff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .goal-head img {
    /* margin-top: -30px; */
    /* background: #f6f9fd; */
    padding: 6px;
    /* margin-left: -24px; */
    border-radius: 12px;
  }

  .daily-steps {
    border-radius: 10px;
    background-color: #b5e9ff;
    border: 1px solid #aae0ff;
    box-sizing: border-box;
    height: 225px;
  }

  .workout {
    border-radius: 10px;
    background-color: #b5e9ff;
    border: 1px solid #aae0ff;
    box-sizing: border-box;
    height: 225px;
  }

  .cycling {
    border-radius: 10px;
    background-color: #b5e9ff;
    border: 1px solid #aae0ff;
    box-sizing: border-box;
    height: 225px;
  }

  .water {
    border-radius: 10px;
    background-color: #b5e9ff;
    border: 1px solid #aae0ff;
    box-sizing: border-box;
    height: 225px;
  }
  .MoodDiary {
    border-radius: 10px;
    background-color: #b5e9ff;
    border: 1px solid #aae0ff;
    box-sizing: border-box;
    height: 225px;
  }
  .Habits {
    border-radius: 10px;
    background-color: #b5e9ff;
    border: 1px solid #aae0ff;
    box-sizing: border-box;
    height: 225px;
  }

  .goal-image {
    width: 60px;
    height: 60px;
    object-fit: contain;
    position: absolute;
    top: -30px;
  }

  .goal-title {
    color: #3f3d3d;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 12px;
  }

  .goal-progress {
    width: 100%;
    margin-bottom: 10px;
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: #8bc34a;
    border-radius: 5px 0 0 5px;
  }

  .goal-stats {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 5px;
  }
  .goal-head {
    display: flex;
    justify-content: start;
    margin-bottom: 12px;
    align-items: center;
  }
  .goal-stats p {
    margin: 5px 0;
  }
  .goalPercentage {
    margin: 5px 0;
    width: 120px;
    position: relative;
    font-size: 12px;
    font-family: Poppins;
    color: #474747;
    text-align: left;
    display: inline-block;
  }
  .goal-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 7px;
  }
  .set-goal-btn {
    padding: 10px 14px;
    color: #9747ff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    background: #fff;
    width: 100%;
  }
  .goal-btn {
    padding: 10px 14px;
    color: #9747ff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    background: #fff;
    width: 100%;
  }
  .fitness-goals-container {
    display: flex;
    gap: 17px;
    flex-wrap: wrap;
    margin-top: 30px;
    align-items: center;
  }

  .next-button-container {
    /* display: flex; */
    align-items: center;
    justify-content: center;
  }
  .challenge-list-container {
    width: 100%;
  }
  .next-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    color: #9747ff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    background: #fff;
    cursor: pointer;
  }

  .next-btn span {
    margin-right: 10px;
  }

  .challenge-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .challenge-list-header h3 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .activity-btn {
    color: #9747ff;
    border-radius: 22px !important;
    background-color: #fff;
    border: 1px solid #9747ff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .Summery-btn {
    color: #615a5a;
    border-radius: 22px !important;
    background-color: #fff;
    border: 1px solid #615a5a;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .ant-table {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
  }

  .ant-table-thead > tr > th {
    background-color: #e3f2fd;
    color: #3c3939;
    font-weight: 600;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
    color: #615a5a;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .ant-table-tbody > tr > td:last-child {
    text-align: right;
    padding-right: 20px;
  }

  .ant-btn {
    border-radius: 50%;
  }
  .womenscare-container {
    padding: 20px;
    background-color: #f9f9f9;
  }

  .period-prediction {
    border-radius: 5px;
    background: linear-gradient(
      119deg,
      #fea5c7 1.32%,
      #f97db8 42.14%,
      #f23b9f 98.52%
    );
    padding: 20px;
    color: white;
    text-align: center;
  }

  .date-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-button {
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    margin: 0 10px;
  }

  .dates {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
  }

  .date {
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .date.active {
    border-radius: 5px;
    background: #f552a8;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .period-info {
    margin-top: 30px;
    margin-bottom: 30px;
    color: #fff;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }

  .edit-period-btn,
  .log-symptoms-btn {
    color: #131313;
    text-align: center;
    border-radius: 3px;
    background: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .insights-container {
    margin-top: 20px;
  }

  .insights-container h3 {
    color: #000;
    font-size: 16px;
    font-weight: 500;
  }

  .insights-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  .insight-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    flex: 1;
    min-width: 150px;
    border: 1px solid #e0e0e0;
  }

  .card-title {
    margin: 5px 0;
    color: #484545;
    font-size: 14px;
    font-weight: 500;
    background-color: #cef0ff;
    padding: 10px;
    border-radius: 5px 5px 0 0;
  }

  .card-value {
    font-size: 14px;
    color: #484545;
    margin-top: 10px;
  }

  .tip-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #9747ff;
    border: none;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .fitness-track-container {
      display: block;
    }
    .fitness-track {
      max-width: 100%;
      margin-bottom: 30px;
    }
    .goal-card {
      width: 100%;
      margin-bottom: 30px;
    }
    .date-navigation {
      display: grid;
    }
  }

  .cards-div {
    background: #d9d9d9 !important;
  }

  .card {
    box-sizing: border-box;
    width: 190px;
    height: 254px;

    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
  }

  .card:hover {
    border: 1px solid #7c4dff;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  }
`;
