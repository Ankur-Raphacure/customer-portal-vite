import styled from "styled-components";

export const MatchGameStyled = styled.div`
  .match-game {
    text-align: center;
  }

  .game-board {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }

  .side {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .image-box {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }

  .image-box.selected {
    border-color: orange;
  }

  .image-box.matched {
    border-color: green;
  }

  p {
    color: #333;
    font-size: 1.2rem;
  }

  .image-box.wrong-match {
    border-color: red;
  }
`;
