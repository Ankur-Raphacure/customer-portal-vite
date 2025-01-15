import styled from "styled-components";

export const StyledShareModal = styled.div`
  h6 {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 16px;
    span {
      float: right;
    }
  }
  .twitter_new_icon_new {
    height: 70px;
  }
  .copy-feedback {
    width: 100%;
    background-color: rgba(160, 223, 235, 0.8);
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: var(--black);
    height: 30px;
    border-radius: 5px;
    padding: 7px;
    text-align: center;
}
  }
  .handle-close-icon-share {
    cursor: pointer;
  }
  .icons {
    display: grid;
    grid-template-columns: repeat(9, auto);
    width: 100%;
    overflow-x: auto;
    padding: 30px 0 30px;
    margin-bottom: 1rem;
    border-top: 1px solid #dadada;
    /* width */
    ::-webkit-scrollbar {
      height: 0.25rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .icons button {
    width: 5.625rem;
    text-align: center;
    svg {
      width: 3.75rem;
      margin: auto;
    }
  }
  .imessage {
    width: 90px;
    text-align: center;
    img {
      height: 60px;
      width: 60px;
      margin: auto;
    }
  }
  .copy {
    width: 100%;
    padding-left: 0.5rem;
    background-color: var(--white);
    border: 1px solid #dadada;
    margin-top: 20px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: calc(100% - 68px) 68px;
    justify-content: space-between;
    align-items: center;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    button {
      border-radius: 0 6px 6px 0;
    }
  }
`;
