import styled from "styled-components";

export const TimeWithGraphStyled = styled.div`
  .graph-main-div {
    gap: 2rem;
  }
  .left-slot-filter {
    width: 30%;
  }
  .left-slot-filter-card {
    padding: 27px;
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .filter-checkbox {
    display: flex;
    flex-direction: column;
  }
  .right-slot-filter {
  }
  .slot-carousel-container,
  .graph-container {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fff;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }
  .graph-container {
    padding: 1rem;
  }
  .arrow-btn {
    background: none;
    border: none;
    font-size: 24px;
    color: #888;
    cursor: pointer;
    padding: 10px;
  }
  .vertical-line {
    width: 1px;
    height: 6rem;
    background-color: black;
  }
  .carousel {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 10px;
    background: white;
    text-align: center;
    cursor: pointer;
  }
`;
