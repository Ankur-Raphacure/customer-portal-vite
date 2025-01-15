import styled from "styled-components";

export const AffiliatedServicesStyled = styled.div`
  padding: 10px 40px;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .paragraph {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  .paragraph p {
    margin: 0;
    width: 100%;
    font-size: 18px;
    font-family: Inter;
    color: #171a1f;
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }

    .paragraph {
      font-size: 0.9rem;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .paragraph {
      font-size: 0.85rem;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75rem;
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }
  }

  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .paragraph p {
      display: none;
    }

    .mobile-view {
      display: block;
    }

    h2 {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
      margin-bottom: unset;
    }
    .specialization-name {
      text-wrap: nowrap;
    }

    .view-more {
      margin-left: 112px;
      margin-top: unset;
    }
  }
`;
