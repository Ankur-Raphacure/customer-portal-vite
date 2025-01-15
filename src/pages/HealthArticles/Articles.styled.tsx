import styled from "styled-components";

export const ArticleStyled = styled.div`
  .main-card {
  }
  .health-article {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    display: grid;
    gap: 40px;
    margin-top: 24px;
  }
  .chat-health-article {
    display: grid;
    gap: 0px;
    margin-top: 24px;
  }
  .Container {
    display: flex;
    align-items: center;
  }
  input {
    width: 80%;
    margin-right: 10px;
  }
  .chat-div {
    display: flex;
    align-items: center;
  }
  .name-tag {
    gap: 0;
  }
  .img-tag {
    margin-right: 22px;
  }
  .select {
    display: flex;
    justify-content: start;
    gap: 1rem;
  }
`;
