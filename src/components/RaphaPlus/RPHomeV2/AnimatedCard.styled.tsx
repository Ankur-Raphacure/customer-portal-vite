import styled from "styled-components";

export const AnimatedCardStyled = styled.div`
  --size: 300px;
  --border-size: 3px;
  --border-radius: 15px;
  --space: 10px;
  
  border-radius: var(--border-radius);
  border: 1px solid #000;
  .card-container {
    width: var(--size);
    border-radius: var(--border-radius);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: var(--space);
    align-items: center;
    background: #f9f9f9;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
    transition: transform 0.3s ease;
    cursor: pointer;
    padding: var(--border-size);
    @media (max-width: 391px) {
      width: 100%;
    }
  }

  

  .img-wrapper {
    display: flex;
    background: white;
    width: 100%;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: calc(var(--space) * 2);
    gap: var(--space);
    background: white;
    border-radius: var(--border-radius);
    min-height: 260px;
  }

  .wrapper:last-child {
    
    .card-content {
      padding: 15px 10px;
    }
  }

  .card-container:hover {
    transform: scale(1.05);
  }

  .card-container:hover::before {
    content: "";
    background-image: conic-gradient(#27b3a4 20deg, transparent 120deg);
    width: 200%;
    height: 200%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 2s linear infinite;
    z-index: -1;
  }

  .card-container::after {
    content: "";
    width: calc(var(--size) - 20px);
    height: calc(var(--size) - 20px);
    background: white;
    position: absolute;
    border-radius: 15px;
    top: 10px;
    left: 10px;
    z-index: -2;
  }

  .card-image {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background: white;
    margin: auto;
  }

  .card-content {
    padding: 15px;
    text-align: center;
    background: white;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  .card-title {
    font-size: 1.5rem;
    color: #333;
    margin: 0.5rem 0;
  }

  .card-description {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;
