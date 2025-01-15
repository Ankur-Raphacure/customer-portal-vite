import styled from "styled-components";

export const AboutUsStyled = styled.div`
  font-family: Poppins;
  width: 100%;
  .heroSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(to right, #eef0ff, #6774e8);
  }
  .heroText {
    height: 100%;
  }

  .heading {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .rapha-cure-container {
    text-align: left;
    /* background-color: #f7f7f7; */
    padding: 40px;
    border-radius: 8px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #9747ff;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
    color: #333;
    /* margin-bottom: 1rem; */
  }

  .description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .description strong {
    /* color: #9747ff; */
  }

  .explore-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #9747ff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }

  .explore-button:hover {
    background-color: #6d28d9;
  }
  .heroImg {
    position: relative;
    padding: 2rem;
    padding-bottom: 0;
  }

  .heroImg img {
    width: 100%;
    height: auto;
    /* scale: 0.8; */
    position: relative;
    z-index: 2;
    border-radius: 0 2rem 0 0;
  }

  .imgWrapper {
    position: relative;
    width: 100%;
  }

  .imgWrapper > div {
    position: absolute;
    width: 50%;
    height: 50%;
  }

  .bottomLeft {
    bottom: 0;
    left: 0;
    background-color: #7d9aff;
  }

  .topRight {
    top: 0;
    right: 0;
    background-color: #7d9aff;
    border-radius: 0 2rem 0 0;
  }

  @media screen and (max-width: 700px) {
    .heroSection {
      flex-direction: column-reverse;
    }
    .heading {
      flex-direction: column;
    }
    h3,
    h2 {
      text-align: center;
    }
  }
`;
