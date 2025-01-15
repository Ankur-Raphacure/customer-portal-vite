import styled from "styled-components";

export const HealthEfficiencyStyled = styled.div`
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
  background-color: #f6f9fd;
  position: relative;
  top: -100px;
  @media (max-width: 760px) {
    position: static;
    max-width: 100%;
  }
  .health-efficiency {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .header-section {
    text-align: center;
    margin-bottom: 20px;
  }

  .header-section h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .header-section h2 {
    font-size: 1.25rem;
    color: #777;
  }

  .cards-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background-color: #e7f1ff; /* Light blue background color */
    border: 1px solid #ddd;
    border-radius: 0;
    padding: 2rem;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    color: #001e3a;
    font-weight: bold;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;
