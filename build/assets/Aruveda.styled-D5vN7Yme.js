import{d as e}from"./index-CitTC1Lo.js";const t=e.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
    padding-bottom: 100px;
    /* font-family: Poppins; */
  }

  .layout-container {
    margin-bottom: 0px !important;
  }

  .header {
    background: linear-gradient(249deg, #0a7c2a 15%, #2ac956 34%, #055a22 80%);
    color: white;
    text-align: left;
    padding: 50px 0;
    padding-left: 2rem;
    position: relative;
    margin-bottom: 3rem;
  }

  .header-content h1 {
    // width: 33%;
    margin: 0;
    font-size: 2rem;
  }

  .header-content h1 span {
    color: yellow;
  }

  .header-content p {
    // width: 25%;
    margin: 10px 0;
  }

  .explore-btn {
    background-color: #9747ff;
    color: #4caf50;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    color: #fff;
    border-radius: 14px;
  }

  .ayurvedaWrapper .btnWrapper {
    padding: 10px;
    position: absolute;
    top: 90%;
    border-radius: 20px;
    background-color: #fff;
  }

  .services {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }

  .service-card {
    text-align: center;
  }

  .treatments {
    margin: 20px 0;
  }

  .filter-buttons {
    text-align: center;
    margin-bottom: 20px;
  }

  .treatment-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .treatment-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    text-align: center;
    width: 200px;
  }

  .treatment-card.available {
    border-color: green;
  }

  .treatment-card.unavailable {
    border-color: red;
  }

  .details-btn,
  .add-to-cart-btn {
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }

  .details-btn {
    background-color: #4caf50;
    color: white;
  }

  .add-to-cart-btn {
    background-color: #ffa500;
    color: white;
  }

  .ayurvedaWrapper .listContainer {
    padding: 0px 2.5rem;
  }

  .service-card {
    background: white;
    border-radius: 20px; /* Adjust the border-radius as needed */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
    padding: 20px; /* Adjust the padding as needed */
    text-align: center;
    width: calc(25% - 40px); /* Adjust the width and margin as needed */
    box-sizing: border-box;
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px; /* Adjust the spacing between cards */
  }

  .service-image {
    border-radius: 20px 20px 0 0; /* Rounded corners for the top */
    width: 100%;
    height: 8rem;
  }

  .service-title {
    margin-top: 15px;
    font-size: 18px;
    color: #000; /* Adjust the color as needed */
  }

  .services {
    padding: 0 4rem;
  }

  .treatment-cards {
    display: flex;
    justify-content: space-between; /* Adjusted to create space between cards */
    flex-wrap: wrap; /* Allow wrapping for responsiveness */
    gap: 1.25rem; /* Added gap between cards, 20px equivalent in rem */
    padding: 1.25rem; /* 20px equivalent in rem */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid;
  }

  .treatments {
    margin-top: 2rem;
  }

  .search-by-disease {
    /* font-family: Poppins, sans-serif; */
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 1rem;
  }

  h3.heading {
    font-size: 1rem;
  }

  .search-by-disease h2 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .search-by-disease .button-group {
    display: flex;
    gap: 10px;
  }

  .search-by-disease .button {
    // padding: 10px 20px;
    width: 10rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    // font-size: 0.2rem;
  }

  .search-by-disease .button:hover {
    background-color: #f0f0f0;
  }

  .search-by-disease .button.active {
    color: #9747ff;
    border-color: #9747ff;
  }

  .treatment-card {
    width: 15rem; /* Adjusted width to be smaller */
    height: 19rem; /* Adjusted height to be almost square */
    border-radius: 0.625rem; /* 10px equivalent in rem */
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); /* 4px 8px equivalent in rem */
    /* overflow: hidden; */
    /* font-family: Arial, sans-serif; */
    background-color: #fff;
    transition: box-shadow 0.3s ease;
  }

  .treatment-card:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); /* 8px 16px equivalent in rem */
  }

  .treatment-image {
    width: 100%;
    height: 9rem; /* Adjusted height to fit the new dimensions */
    object-fit: cover;
  }

  .treatment-info {
    padding: 1rem; /* Reduced padding */
  }

  .treatment-info h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  .price {
    font-size: 1.1rem;
    color: #333;
    margin: 0.5rem 0;
  }

  .bookings {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 1rem;
  }

  .treatment-cards .button-group {
    display: flex;
    gap: 0.625rem;
  }

  .treatment-cards .button {
    flex: 1;
    padding: 0.625rem 0; /* Adjusted padding to fit within the card */
    border: 0.125rem solid transparent; /* 2px equivalent in rem */
    border-radius: 0.3125rem; /* 5px equivalent in rem */
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 0.875rem; /* Ensure button text fits */
  }

  .view-details {
    background-color: #fff;
    border-color: #a78bfa;
    color: #a78bfa;
  }

  .view-details:hover {
    background-color: #e0d7fc;
  }

  .add-to-cart {
    background-color: #a78bfa;
    color: #fff;
  }

  .add-to-cart:hover {
    background-color: #9264e7;
  }

  .treatments .button-group {
    gap: 0;
  }

  .treatments button.button {
    border-radius: 15px;
    transform: scale(0.85);
    padding: 12px;
  }

  .treatments h6 {
    text-align: end;
    font-size: 1rem;
  }

  .centre-cards {
    flex-wrap: nowrap;
  }

  @media (max-width: 1100px) {
    .search-by-disease {
      display: flex;
      flex-direction: column;
    }

    .centre-cards {
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    .header-content h1 {
      width: 100%;
    }
    .header-content p {
      width: 100%;
    }
    .ayurvedaWrapper .btnWrapper {
      text-align: left;
      position: relative;
      padding: 0;
      background-color: transparent;
    }
    .service-card {
      width: auto;
      padding: 15px; /* Adjusted padding for smaller screens */
    }

    .services {
      padding: 0 2rem; /* Reduced padding for smaller screens */
      display: grid;
      grid-auto-columns: 1fr;
    }
    .search-by-disease .button {
      font-size: 10px;
      padding: 10px 16px !important;
      width: 8rem;
    }
    .treatment-cards {
      /* overflow: scroll; */
      justify-content: center;
      display: flex;
      align-items: center;
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 1rem;
    }
    .cardstyle {
      width: 238px;
    }
    .treatment-cards {
      padding: 0;
    }
    .button-group {
      display: grid !important;
      grid-template-columns: auto auto auto;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .treatment-search-section {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 0 12px;
  }
  @media (max-width: 600px) {
    .labs-search-section {
      flex-direction: column;
    }
    .labs-search-section-input {
      display: flex;
    }

    .labs-search-section-input {
      width: 100%;
    }

    .labs-search-section-input button {
      right: 0;
      top: auto;
      bottom: 0;
      transform: none;
      // width: 20%;
      margin: 2px;
    }

    .labs-search-section-links {
      width: 100%;
      margin-left: 0px;
    }
  }
  .CardsContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .labs-search-section-input {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    padding: 5px;
    input {
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.56px;
      opacity: 0.5;
      border: none;
      width: 400px;
      height: 34px;
      padding: 5px;
    }
    button {
      height: 34px;
      border-radius: 6px;
      background: #426f09;
      border: none;
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      width: 96px;
    }
  }
  .labs-search-section-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-left: 50px;
  }

  .labs-search-section-links button {
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.4;
    background: #fff;
    height: 38px;
    color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 20px;
  }
  .top-category-secs {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .view-all-btn {
    cursor: pointer;
  }
  .view-all {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    button {
      color: #9747ff;
      background: #fff;
      /* height: 40px; */
      border: 1px solid #9747ff;
      /* padding: 0px 50px; */
      border-radius: 4px;
    }
    text-align: center;
  }
`;export{t as A};
