import styled from "styled-components";

export const TimelineStyled = styled.div`
  .timelineWrap {
    overflow: hidden;
  }
  .timeline button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .timeline {
    white-space: nowrap;
    overflow-x: hidden;
    width: 200vw;
  }

  .timeline > ol {
    font-size: 0;
    width: 100vw;
    padding: 100px 0;
    transition: all 1s;
    animation: cambio 20s infinite linear;
  }
  .just-date {
    z-index: 9;
  }

  .timeline > ol > li {
    position: relative;
    display: inline-block;
    list-style-type: none;
    width: 160px;
    height: 3px;
    background: black;

    /* AutoScroll */
    padding: 0 10px;
    list-style: none;
  }

  .timeline > ol > li:last-child {
    width: 250px;
  }

  .timeline > ol > li:not(:last-child) span.show-info {
    content: "";
    cursor: pointer;
    position: absolute;
    /* top: 50%; */
    left: calc(100% + 1px);
    bottom: 0;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: linear-gradient(to bottom, #17736f, #2bd9d1);
  }

  .timeline > ol > li:not(:last-child) .just-date {
    position: absolute;
    height: auto;
    opacity: 1;
    right: -35px;
    top: -5px;
    /* z-index: -1; */
  }

  .timeline > ol > li.flip .just-date {
    top: -95px !important;
  }

  .timeline > ol > li.flip .circle {
    top: -15px !important;
  }

  .timeline > ol > li:nth-child(odd) .just-date {
    top: 28px;
  }

  .timeline > ol > li:nth-child(even) .just-date {
    top: -40px;
    display: none;
  }

  .timeline > ol > li:nth-child(odd) .circle {
    top: 18px;
  }

  .timeline > ol > li:nth-child(even) .circle {
    top: -12px;
    display: none;
  }

  .timeline > ol > li:not(:last-child) .just-date p {
    font-size: 0.8rem;
    font-weight: normal;
  }

  .timeline time:not(.date) {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .timeLineText {
    margin-top: 43px;
    margin-right: -255px;
    font-family: Inter !important;
    font-size: 16px !important;
    font-weight: bold !important;
  }

  /* TIMELINE ARROWS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

  .timeline .arrows {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  @keyframes cambio {
    from {
      margin-left: 0%;
    }

    to {
      margin-left: -100%;
    }
  }
`;
