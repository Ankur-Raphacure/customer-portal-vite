import styled from "styled-components";

export const TeamStyled = styled.div`
  padding: 1rem;
  overflow: hidden;
  .team-member {
    position: relative;
    margin: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.5s ease;
    cursor: pointer;
  }

  .team-member:hover {
    transform: scale(1.1);
  }

  .team-member-image {
    max-width: 100%;
    width: inherit;
    max-height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: opacity 0.3s ease;
  }

  .team-member-name {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 12px;
  }

  .team {
    text-align: center;
    padding: 20px;
  }

  .team-title {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;
