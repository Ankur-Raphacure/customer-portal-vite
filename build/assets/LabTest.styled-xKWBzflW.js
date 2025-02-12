import{d as e}from"./index-DDOdRoFT.js";const r=e.div`
  --padding: 3rem;
  --button-bg: #a3dac2;
  --button-bg-hover: #88c9a8;
  --text-color: #252b61;
  --shadow: 0 4px 23px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    --padding: 1.5rem;
  }

  width: 100%;
  font-family: Outfit, sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0 !important;
    color: var(--text-color);
  }

  .heroImg {
    position: relative;
    padding: var(--padding);
    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .uploadBtnWrapper {
    bottom: var(--padding);
    right: var(--padding);
    background: var(--button-bg);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: var(--button-bg-hover);
    }

    h3 {
      margin: 0;
      font-size: 1.2rem;
    }
  }

  .searchFeature {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background: #eaeaf0;
    padding: 2.5rem;
    border-radius: 50px;
    margin: 60px auto;
    max-width: 75%;
    box-shadow: var(--shadow);
    @media screen and (max-width: 850px) {
      flex-direction: column;
    }

    .searchBar {
      display: flex;
      align-items: center;
      background: #ffffff;
      border: 1px solid #dcdce4;
      padding: 0.8rem 1.2rem;
      border-radius: 30px;
      flex-grow: 1;

      @media screen and (max-width: 430px) {
        flex-wrap: wrap;
      }

      input {
        flex-grow: 1;
        font-weight: 200;
        border: none;
        outline: none;
        font-size: 18px;
        color: #b8b8b8;
        margin: 0 0.8rem;
        font-family: inherit;
      }

      .icon {
        color: #404b5c;
        font-size: 1.2rem;
      }

      .searchIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #92bdf6;
        border-radius: 50%;
        width: 32px;
        height: 32px;
      }
    }

    .featureButton {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #f2e09a;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
      text-wrap: nowrap;

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      &:hover {
        background: #e5d488;
      }

      &:nth-child(2) {
        background: #a3dac2;

        &:hover {
          background: #88c9a8;
        }
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0 var(--padding);
    padding-top: var(--padding);

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin: 0;
      color: #141414;
    }

    .viewAll {
      font-size: 1rem;
      color: #404b5c;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #88c9a8;
      }
    }
  }

  .healthSaverSection {
    background: #f6f6f9;
    border-radius: 10px;
    margin-top: 0rem;
    background: #e2ecff;
    display: flex;
    flex-direction: column;
    width: 100%;

    .packageFilters {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0 var(--padding);
      padding-bottom: var(--padding);

      .filterButton {
        padding: 0.8rem 1.5rem;
        border: 1px solid #404b5c;
        border-radius: 30px;
        background: transparent;
        font-size: 1rem;
        font-weight: 500;
        color: #404b5c;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: #a3dac2;
          color: #fff;
          border-color: #a3dac2;
        }

        &:hover {
          background: #d8f0e4;
          color: #000;
        }
      }
    }
  }
  .healthCards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 var(--padding);
    padding-bottom: var(--padding);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Single column for small screens */
    }
  }
  .nearbyCards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    padding: 0 var(--padding);
    padding-bottom: var(--padding);
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .nearByLabs {
    .header {
      padding: 80px 60px;
      padding-bottom: 48px;
      margin-bottom: 0;
    }
  }
  .popularCheckups {
    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .imgWrap {
        padding: 0 3rem;
        width: 100%;
        border-radius: 5rem;
        background: linear-gradient(to bottom, #ffd68a, #fff2da);
        position: relative;
        display: flex;
        justify-content: center;
        @media screen and (max-width: 600px) {
          display: none;
        }
        @media screen and (min-width: 1200px) {
          min-width: 620px;
        }
        min-height: 500px;
        img {
          position: absolute;
          bottom: 0;
        }
      }
    }
  }

  .mapWrapper {
    width: 100%;
    padding: var(--padding);
    padding-top: 0;

    & > div {
      border-radius: 2rem;
      box-shadow: var(--shadow);
    }
  }

  .cardsCarousel {
    position: relative;
    top: -5rem;
  }

  .privacyImg {
    img {
      width: 100%;
      padding: 5rem;
    }
  }

  .why {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--padding);
    padding: var(--padding);
    padding-bottom: calc(var(--padding) * 2);
    .contentWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 1rem;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .heading {
      font-size: 2rem;
    }
    .desc {
      background: #e7c2d44d;
      padding: var(--padding);
      border-radius: 2rem;
      font-size: 1.2rem;
    }
    img {
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .list-categories-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem; /* Spacing between items */
    padding: 1rem;
  }

  .mx-auto-grid {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .categoryWrapper {
    width: 100%; /* Ensure it adapts to the container */
  }

  .card-body1 {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    padding: 1rem;
  }

  .card-body1:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .img-fit {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin: 0;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    .list-categories-list {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .list-categories-list {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.5rem;
    }

    .card-body1 {
      padding: 0.8rem;
    }

    h3 {
      font-size: 0.8rem;
    }
  }
  .viewAllBtn {
    text-align: center;
    width: 200px;
    padding: 10px;
    background: #252b61;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    color: #fff;
    margin-left: auto;
  }
  .viewBtn2 {
    margin-right: var(--padding);
  }
  .ml-auto {
    margin-left: auto;
  }
  .searchSort {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column !important;
      align-items: center;
      
    }
  }
`;export{r as L};
