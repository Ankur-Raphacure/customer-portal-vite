import styled from "styled-components";

export const FitnessStyled = styled.div`
  .search-box-div {
    margin-top: 10px;
    width: 100% !important;
  }
  .search-bar {
    position: relative !important;
  }
  .parent-search-left-div {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .main-div {
    padding: 10px 0 40px 0;
    background-color: rgb(233, 235, 241);
  }
  .intro-banner {
    background-color: rgb(18, 29, 89);
    width: 100%;
  }
  .intro-banner-img {
    width: 100%;
  }
  .search-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }
  .search-box-styled {
    border-radius: 25px;
    width: 100%;
    height: 50px;
    border: 2px solid rgb(18, 29, 89);
    padding: 0 48px 1px 48px;
    font-size: 24px;
  }
  .search-box-div {
    position: relative;
    width: 40%;
  }
  .search-voice-icon {
    position: absolute;
    right: 9px;
    top: 6px;
  }

  .category-deck {
    display: flex;
  }

  .other-services-container {
    padding: 10px 5% 10px 5%;
    margin-bottom: 50px;
  }
  .other-services-main {
    display: flex;
    gap: 25px;
    align-items: center;
  }

  .map-component{
    min-width:300px;
    width:30%
  }
  @media (max-width: 1329px) {
    .other-services-main {
      flex-direction: column;
    }
    .map-component{
      width:80%;
    }
  }

  .other-services-svg-map {
    width: 500px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Default: 3 columns */
    gap: 15px;
    width: 80%;
    justify-content: center;
    place-items: center;
  }

  .grid-item {
    background-color: white;
    color: black;
    padding: 10px 10px 0 10px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }

  @media(max-width:744px){
    .category-deck{
      justify-content:center !important;
    }
  }

  /* Reduce to 2 columns when screen width is below 1024px */
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Reduce to 1 column when screen width is below 600px */
  @media (max-width: 600px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .sports-img-container {
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .category-container {
    width: 100%;
    padding: 10px 5% 10px 5%;
    margin-bottom: 40px;
  }
  .category-container h3 {
    margin-bottom: 50px;
    font-weight: 700;
  }
  .category-descriptions {
    height: 50px;
    margin-bottom: 5px;
  }
  .category-deck {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .category-card {
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 25px;
    padding: 20px 15px 0px 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-img {
    border-radius: 25px;
    height: 100%;
    object-fit: contain;
  }
  .card-img-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 140px;
  }
  .link-to {
    color: black;
    text-decoration: none;
  }
  .bottom-banner{
    background-color: rgb(18, 29, 89);
    width: 100%;
    position:relative;
  }

  .bottom-banner-book-now{
    position:absolute;
    bottom:10px;
    left:50%;
    transform: translateX(-50%);
    border-radius:24px;
    padding:0 15px 0 15px;
    background-color:#2dfc7e;
    font-weight: bold;
    border: none;
  }
  .bottom-banner-book-now-link{
    text-decoration:none;
    color:black;
    font-weight:bold;
    margin:0;
    padding:0;
  }

  @media(max-width:950px){
    .bottom-banner-book-now-link{
      font-size:10px;
    } 
  }
  @media(max-width:500px){
    .bottom-banner-book-now-link{
      font-size:7px;
    } 
  }

`;
