import React from "react";

const card = [
  {
    heading: "Womens only Gym opening",
    date: "May 22",
    loc: "Hsr layout",
    text: "Loren ipsum",
    saving: "20% Saving",
  },
  {
    heading: "Womens only Gym opening",
    date: "May 22",
    loc: "Hsr layout",
    text: "Loren ipsum",
    saving: "20% Saving",
  },
  {
    heading: "Womens only Gym opening",
    date: "May 22",
    loc: "Hsr layout",
    text: "Loren ipsum",
    saving: "20% Saving",
  },
  {
    heading: "Womens only Gym opening",
    date: "May 22",
    loc: "Hsr layout",
    text: "Loren ipsum",
    saving: "20% Saving",
  },
];

const Gymcard = () => (
  <div className="container">
    <div className="card-wrapper">
      {card.map((item) => (
        <div className="maincard">
          <div className="bgcard">
            <div className="bgleft">
              <h4>{item.heading}</h4>
              <h5 className="date">
                {item.date} <span className="loc">{item.loc} </span>
              </h5>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                  >
                    <path
                      d="M0.16346 2.11723C0.849857 3.31011 1.53305 4.40177 2.12014 5.70708C3.54869 4.22163 5.00132 2.73621 7.12802 1.27818L6.74374 0.977228C5.02264 1.93398 3.62423 2.90241 2.29997 4.14515C1.80541 3.44237 0.977207 2.41291 0.4518 1.85682L0.16346 2.11723Z"
                      fill="white"
                    />
                  </svg>{" "}
                  {item.text}{" "}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                  >
                    <path
                      d="M0.16346 2.11723C0.849857 3.31011 1.53305 4.40177 2.12014 5.70708C3.54869 4.22163 5.00132 2.73621 7.12802 1.27818L6.74374 0.977228C5.02264 1.93398 3.62423 2.90241 2.29997 4.14515C1.80541 3.44237 0.977207 2.41291 0.4518 1.85682L0.16346 2.11723Z"
                      fill="white"
                    />
                  </svg>{" "}
                  {item.text}{" "}
                </li>
                <li>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                  >
                    <path
                      d="M0.16346 2.11723C0.849857 3.31011 1.53305 4.40177 2.12014 5.70708C3.54869 4.22163 5.00132 2.73621 7.12802 1.27818L6.74374 0.977228C5.02264 1.93398 3.62423 2.90241 2.29997 4.14515C1.80541 3.44237 0.977207 2.41291 0.4518 1.85682L0.16346 2.11723Z"
                      fill="white"
                    />
                  </svg>{" "}
                  {item.text}{" "}
                </li>
              </ul>
            </div>
            <div className="bgrigt">
              <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405878602.png"} className="girlimg" />
            </div>
            <p className="saving custom-flex-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              &nbsp;{item.saving}{" "}
            </p>
          </div>

          <div className="prebook">
            <button className="bookbtn">Pre Book Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Gymcard;
