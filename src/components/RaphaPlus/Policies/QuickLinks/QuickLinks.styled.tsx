import styled from "styled-components";

export const QuickLinksStyled = styled.div`
  .quick-links h3 {
    font-size: 1rem;
    text-decoration: underline;
    margin-bottom: 10px;
  }

  .quick-links ul {
    list-style-type: none;
    padding: 0;
  }

  .quick-links li {
    margin-bottom: 10px;
    padding: 5px 0;
    cursor: pointer;
    text-wrap: nowrap;
    color: #001e3a;
    font-weight: bold;
    padding-left: 15px;
  }

  .quick-links a {
    text-decoration: none;
    color: #001e3a;
  }

  .quick-links li.active {
    color: #27b3a4;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #27b3a4;
    border-radius: 0 10px 10px 0;
  }

  .quick-links li.active a {
    color: #27b3a4;
    padding: 0 1rem  0 0;
  }
`;
