import styled from "styled-components";

export const LabtestCardStyled = styled.div`
  border-radius: 2rem;
  margin: 1rem;
  padding: 23px;
  background-color: #fff;
  box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  img {
    object-fit: none;
    width: fit-content;
    @media screen and (max-width: 850px) {
      object-fit: contain;
    }
  }

  .clickBtn {
    border-radius: 50%;
    background: #f8edb4;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-left: auto; */
    cursor: pointer;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`;
