import styled from "styled-components";

export const BookDemoStyled = styled.div`
  background-color: #ffffff;
  font-family: Inter, sans-serif;
  .p-75 {
    padding: 5rem;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: -20px;
  }
  .booking-container {
    display: flex;
    color: #333;
    border-radius: 5px;
    margin: 0 auto;
    padding: 0px;
    border: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
  }
  .calendar-container {
    width: 50%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
  }

  .left-panel,
  .right-panel {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }

  .left-panel {
    flex: 1;
    padding: 30px;
    background-color: #ffffff;
    border-right: 1px solid #ddd;
    border-radius: 5px;
  }

  .left-panel h2 {
    color: #003b8e;
    font-weight: bold;
    margin-bottom: 10px;
    font-weight: 600px;
    font-size: 16px;
  }

  .left-panel h1 {
    color: #002e66;
    font-size: 32px;
    font-weight: 700px;
    margin-bottom: 20px;
  }

  .info {
    background-color: #ecffec;
  }

  .info p {
    display: flex;
    align-items: center;
    margin: 8px 0;
    font-size: 16px;
    font-weight: 600px;
    color: #555;
    line-height: 19.36px;
  }

  .key-features-container h3 {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 600;
    font-family: Inter;
    color: #252b61;
    line-height: 21.78px;
  }

  .key-features-container ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
  }

  .key-features-container li {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    line-height: 19.36px;
  }

  .key-features-container li::before {
    content: "•";
    margin-right: 8px;
    color: #002e66;
    font-size: 1.2em;
  }

  .back-button {
    background: none;
    border: none;
    border-radius: 53px;
    font-size: 1.5em;
    cursor: pointer;

    margin-bottom: 20px;
    background-color: #003a80;
    color: #fff;
    font-weight: bold;
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4.5rem 7rem;
    background-color: #ffffff;
    border-radius: 15px;

    h2 {
      font-weight: 600;
      font-size: 20.8px;
      margin-top: 10px;
      width: 210px;
      font-family: Inter;
      color: #000;
    }
  }

  .calendar-time-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #003a80;
    font-weight: bold;
    margin-left: 275px;
  }

  .calendar-header span {
    margin: 0 30px;
  }

  .nav-button {
    background: none;
    border: none;
    font-size: 20px;
    color: #003a80;
    cursor: pointer;
  }

  .calendar-days {
    width: 54px;
    height: 54px;
  }

  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    margin-left: 8px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }

  .dates-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }

  .day-button {
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    background-color: #f0f4ff;
    color: #003a80;
    font-size: 0.9em;
    font-weight: bold;
  }

  .day-button:hover {
    background-color: #d9e6ff;
  }

  .day-button.selected {
    background-color: #252b61;
    color: #fff;
    font-weight: bold;
  }

  .day-button.disabled {
    background-color: #f2f2f2;
    color: #aaa;
    cursor: not-allowed;
  }

  .time-slots h3 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #003a80;
    margin-left: 12px;
  }

  .time-slots-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    height: 590px;
    overflow-y: scroll;
    padding: 0 1rem;
  }

  .time-slots-grid::-webkit-scrollbar {
    width: 5px;
  }

  .time-slots-grid::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  .time-slots-grid::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .time-slots-grid::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .time-slot-button {
    padding: 10px;
    font-size: 12px;
    border: 1px solid #b5c8db;
    border-radius: 5px;
    background-color: #ffffff;
    color: #252b61;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    width: 154px ;
  }

  .time-slot-button:hover {
    background-color: #d9e6ff;
  }
  .time-slot-button.selected {
    font-weight: bold;
    background-color: #eaedfc;
    width: fit-content ;
    border: none;
  }

  .time-slot-button:disabled {
    background-color: #f2f2f2;
    color: #aaa;
    cursor: not-allowed;
  }
  .time-slot-container {
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      /* width: 100%; */
      height: 100%;
    }
  }

  .selected-time-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .selected-time-container p {
    font-size: 16px;
    font-weight: bold;
    color: #003a80;
  }

  .next-button {
    padding: 8px 16px;
    font-size: 14px;
    color: #fff;
    background-color: #252b61;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    display: inline-block;
    width: fit-content;
  }

  .next-button:hover {
    background-color: #002e66;
  }

  .calendar-time-container {
    justify-content: center;
  }
  .react-calendar {
    border: none;
  }
  button.react-calendar__tile {
    border-radius: 50%;
  }

  .doctor-tool-card {
    background-color: #ffffff;
    border-radius: 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.26);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    & > div {
      padding: 0 2rem;
      font-family: Inter;
    }
  }

  .doctor-tool-card > div:last-child {
    margin-bottom: 70px;
    margin-top: 25px;
  }

  .header {
    margin-bottom: 1rem;
  }

  .back-icon {
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
    background-color: #003a80;
    border-radius: 50%;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto;
  }

  .company-name {
    font-size: 16px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-top: 0.5rem;
  }

  .title {
    font-weight: 600;
    font-size: 30px;
    color: #00254d;
    margin-top: 0.5rem;
  }

  .details-section {
    background-color: #f0f8f4;

    padding: 1rem 2rem !important;
  }

  .detail {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .detail span {
    font-weight: 600;
  }

  .icon {
    font-size: 1.2rem;
    color: #666;
    margin-right: 0.5rem;
  }

  .key-features h3 {
    font-size: 18px;
    font-weight: bold;
    color: #00254d;
    margin-bottom: 0.5rem;
  }

  .key-features ul {
    list-style: none;
    padding-left: 0;
  }

  .key-features li {
    font-size: 0.9rem;
    font-weight: bolder;
    margin-bottom: 0.3rem;
    color: #333;
  }

  .key-features li::before {
    content: "•";
    color: #00254d;
    display: inline-block;
    width: 1rem;
  }
  .ant-picker-calendar-header {
    text-wrap: nowrap;
    margin-top: 45px;
  }
  .ant-picker-date-panel {
    .ant-picker-cell-disabled::before {
      pointer-events: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin: auto;
    }
    .ant-picker-cell-inner.ant-picker-calendar-date.ant-picker-calendar-date-today::before {
      border-radius: 50%;
      margin: auto;
    }
    .ant-picker-cell-inner.ant-picker-calendar-date {
      border-radius: 50%;
      padding: 5px 8px;
      height: auto;
    }
  }
  .ant-picker-month-panel {
    td.ant-picker-cell-disabled::before {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: auto;
    }
    td.ant-picker-cell {
      & > div.ant-picker-cell-inner {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: auto;
      }
    }
  }

  .ant-picker-date-panel {
    .ant-picker-cell {
      &.ant-picker-cell-in-view {
        .ant-picker-cell-inner.ant-picker-calendar-date {
          border-radius: 50%;
          padding: 5px 8px;
          height: auto;
        }
        .ant-picker-calendar-date-today::before {
          border-radius: 50%;
          margin: auto;
        }
      }
      &:not(.ant-picker-cell-in-view) {
        .ant-picker-cell-inner {
          visibility: hidden;
        }
      }
    }
  }

  .calendar-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 20px;
  }

  .calendar-navigation button {
    background-color: #edf4fe;
    color: #40a4f1;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 25px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-navigation span {
    font-size: 18px;
    font-weight: bold;
    color: #6c7680;
    width: 150px;
    text-align: center;
    display: inline-block;
  }

  button:disabled {
    opacity: 0.5;
    background: white;
  }

  .ant-picker-calendar.ant-picker-calendar-mini {
    @media screen and (min-width: 1200px) {
      scale: 1.23;
    }
  }

  .calendar-time-container,
  .ant-picker-calendar.ant-picker-calendar-mini,
  .ant-picker-panel,
  .ant-picker-date-panel,
  .ant-picker-body,
  table.ant-picker-content {
    height: 100%;
  }

  .ant-picker-date-panel
    .ant-picker-cell.ant-picker-cell-in-view
    .ant-picker-cell-inner.ant-picker-calendar-date {
    background-color: #eaedfc;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    color: white;
    background-color: #252b61 !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner {
  }

  .ant-picker-date-panel .ant-picker-cell.ant-picker-cell-in-view.past-date {
    background-color: transparent !important;
  }
  .ant-picker-cell-disabled {
    .ant-picker-cell-inner.ant-picker-calendar-date {
      background-color: #fff !important;
    }
  }
  .ant-picker-cell-disabled::before {
    background-color: #fff !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border: 1px solid #252b61 !important;
  }
  @media screen and (max-width: 1000px) {
    .booking-container {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 1200px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      padding: 2rem;
      height: auto;
      min-height: 100vh;
    }

    .time-slots {
      margin: 0 auto;
    }

    .left-panel,
    .right-panel {
      padding: 20px;
    }

    .right-panel h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 1rem;
    }

    .calendar-time-container {
      gap: 20px;
      flex-direction: column;
      @media screen and (min-width: 1200px) {
        scale: 1.23;
      }
    }

    .time-slot-container {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .p-75 {
      padding: 1.5rem;
    }

    .calendar-header {
      flex-direction: column;
      align-items: center;
      font-size: 1em;
    }

    .nav-button {
      font-size: 1em;
    }

    .calendar-days {
      width: 45px;
      height: 45px;
    }

    .day-button {
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 0.8em;
    }

    .key-features h3 {
      font-size: 16px;
    }

    .key-features li {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 480px) {
    .arrow-icon {
      display: none;
    }
  }

  @media screen and (max-width: 392px) {
    .p-75 {
      padding: 1rem;
      
    }

    .back-icon {
      font-size: 1.9rem;
      margin: -16.5rem auto;
      margin-left: -32px;
    }

    .booking-container {
      border: transparent !important;
      margin-top: unset !important;
      margin-bottom: unset !important;
    }

    .company-name {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: black;
    }

    .title {
      text-align: center;
      font-size: 28px !important;
      font-weight: 600;
    }

    .header h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .details-section {
      font-size: 0.9rem;
    }

    .calendar-container {
      width: 100%;
      padding: 10px;
    }

    .day-button {
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 0.7em;
    }

    .time-slots-grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      overflow-y: scroll;
      height: 800px;
      
    }

    .time-slots h3 {
      font-size: 26px;
    }
    .time-slot-button {
      
      margin: auto;
      width: 300px;
      padding: 20px 10px;
      font-size: 21px;
    }

    .time-slot-button.selected {
      width: 140px;
    }

    .next-button {
      font-size: 0.8rem;
      width: 140px;
      padding: 20px 10px;
      font-size: 21px;
    }

    .right-panel {
      border-left: unset !important;
    }

    .key-features-container {
      background-color: #eaedfc;
      padding: 20px !important;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      margin-top: 25px !important;
    }

    .key-features-container.active {
      background-color: #fff;
    }

    .key-features-container h3 {
      color: #252b61;

      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
    }

    .key-features-list {
      display: none;
      margin-top: 10px;
      list-style-type: disc;
      /* margin-left: 0px; */
      font-size: 16px;
      padding-left: 21px;
      li {
        font-weight: 600;
        margin-left: -10px !important;
      }
    }

    .key-features-container.active .key-features-list {
      display: block;
    }

    .key-features-icon {
      transform: rotate(0deg);
      transition: transform 0.3s ease;
    }

    .key-features-container.active .key-features-icon {
      transform: rotate(180deg);
    }

    .doctor-tool-card > div:last-child {
      margin-bottom: 50px;
    }
  }

  .time-slots-container {
    width: 100%;
    .back-icon {
      margin: 0;
      @media screen and (min-width: 1200px) {
        display: none;
      }
    }
    .time-slots {
      text-align: center;
      
    }
    .time-slot-container {
      margin: auto;
    }
  }
`;
