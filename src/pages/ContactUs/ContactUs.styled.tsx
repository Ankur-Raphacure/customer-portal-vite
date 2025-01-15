import styled from "styled-components";

export const ContactUsStyled = styled.div`
  width: 100%;
  .banner img {
    width: 100%;
  }
  .contact-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border-radius: 10px;
    margin: 0 auto;
  }

  .contact-info-section {
    max-width: 50%;
  }

  .contact-info-section h1 {
    color: #9747ff;
    font-size: 2em;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .contact-info-section p {
    color: #666;
    margin-bottom: 20px;
  }

  .contact-info {
    margin-bottom: 20px;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    font-size: 1em;
    color: #666;
  }

  .contact-item svg {
    margin-right: 10px;
  }

  .app-links {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
  }

  .app-icon {
    /* width: 150px; */
    margin: 0 10px;
  }

  .qr-codes {
    display: flex;
    justify-content: flex-start;
  }

  .qr-code {
    /* width: 100px; */
    margin: 0 10px;
  }

  .form-section {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 15px; */
    gap: 1rem;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    /* margin-bottom: 10px; */
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #9747ff;
    outline: none;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #aaa;
  }

  .submit-button {
    background-color: #9747ff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-button:hover {
    background-color: #42ff00;
  }

  .submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #9747ff;
    }
  }

  @media screen and (max-width: 700px) {
    .contact-form-container {
      flex-direction: column;
    }
    .contact-info-section {
      max-width: 80%;
    }
    .app-links,
    .qr-codes {
      flex-direction: column;
    }
  }
`;
