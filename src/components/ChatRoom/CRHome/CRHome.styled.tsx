import styled from "styled-components";

export const CRHomeStyled = styled.div`
  /* Container for the message list */
  .message-list {
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 600px;
    margin: auto;
  }

  /* Base style for each message bubble */
  .message-bubble {
    padding: 10px 15px;
    border-radius: 15px;
    margin: 5px 0;
    max-width: 75%;
    font-size: 14px;
    position: relative;
    word-wrap: break-word;
  }

  /* Sent message styles */
  .message-bubble.sent {
    background-color: #d1f5d3; /* Light green */
    align-self: flex-end;
    color: #333;
    border-radius: 15px 0 15px 15px;
  }

  /* Received message styles */
  .message-bubble.received {
    background-color: #f1f0f0; /* Light gray */
    align-self: flex-start;
    color: #333;
    border-radius: 15px 15px 15px 0px;
  }

  /* Style for the message info text */
  .message-info {
    font-size: 12px;
    color: #777;
    margin-top: 5px;
    text-align: right;
  }

  .cr-home {
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .input-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  button:active {
    background-color: #3e8e41;
  }

  input[readonly] {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;
