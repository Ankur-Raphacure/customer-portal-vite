import styled from "styled-components";

export const ChatComponentStyled = styled.div`
  width: 100%;
  padding: 2rem;
  .chat-container {
    display: flex;
    height: 100vh;
    font-family: Poppins, sans-serif;
    @media screen and (max-width: 700px) {
      flex-direction: column;
      height: 100%;
    }
  }
  .sidebar {
    /* width: 200px; */
    background-color: #f0f0f0;
    padding: 20px;
    overflow-y: auto;
  }
  .sidebar h2 {
    margin-bottom: 20px;
  }
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .sidebar li:hover {
    background-color: #e0e0e0;
  }
  .sidebar li.selected {
    background-color: #d0d0d0;
  }
  .sidebar li svg {
    margin-right: 10px;
  }
  .chat-area {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .messages {
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 20px;
  }
  .message {
    max-width: 70%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .message p {
    margin: 0;
  }
  .message .timestamp {
    font-size: 0.8em;
    color: #888;
    display: block;
    margin-top: 5px;
  }
  .sent {
    background-color: #dcf8c6;
    align-self: flex-end;
    margin-left: auto;
  }
  .received {
    background-color: #f0f0f0;
    align-self: flex-start;
  }
  .message-form {
    display: flex;
  }
  .message-form input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
  }
  .message-form button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  .message-form button:hover {
    background-color: #45a049;
  }
  .no-chat {
    text-align: center;
    color: #888;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 700px) {
      max-height: 150px;
      overflow-y: scroll;
    }
  }
`;
