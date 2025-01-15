import styled from "styled-components";

export const RPHomeStyled = styled.div`
  .HomeContainer {
    justify-content: space-between;
    display: grid;
    grid-template-columns: 3fr 4fr;
    width: 90%;
    margin: auto;
  }

  .LeftSection {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
  }

  .RightSection {
    flex: 1;
    padding: 20px;
  }

  .Title {
    font-size: 3em;
    margin-bottom: 0.5em;
  }
  .Title span {
    color: #1d8e8a;
    font-weight: bold;
  }

  .Button {
    background: linear-gradient(135deg, #2bb3a5, #001e3a);
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    margin: 10px 0;
  }
  .Button:hover {
    background: #1f8c89;
  }

  .CardsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
  }

  .FullWidthCardContainer {
    grid-column: span 2;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .Card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: left;
    flex: 1;
    position: relative;
    cursor: pointer;
  }

  .CardIcon {
    font-size: 2em;
    color: #2bb3a5;
    margin-bottom: 10px;
    display: flex;
  }
  .CardIcon img {
    width: 5rem;
    margin: auto;
  }

  .CardTitle {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .CardDescription {
    font-size: 0.9em;
    line-height: 1.5em;
  }

  .CardLink {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #2bb3a5;
    font-size: 1.5em;
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    .HomeContainer {
      display: flex;
      flex-direction: column;
    }

    .LeftSection {
      align-items: center;
    }
  }

  @media (max-width: 680px) {
    .FullWidthCardContainer {
      flex-direction: column;
    }
    .HomeContainer {
      width: 100%;
    }
    .CardsContainer {
      display: flex;
      flex-direction: column;
    }
    h1 {
      text-align: center;
    }
  }
`;
