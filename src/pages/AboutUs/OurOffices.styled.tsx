import styled from "styled-components";

export const OurOfficesStyled = styled.div`
  padding: 1rem;
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Adjust the gap between cards if needed */
    justify-content: center;
    padding: 20px;
  }

  .card {
    background: linear-gradient(90deg, #e9fad3 0%, #e4e8ff 100%);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    /* height: 400px;  */
    text-align: center;
    overflow: hidden;
    transition: transform 0.2s, border 0.2s;
    border: 2px solid transparent; /* Initial transparent border */
  }

  .card:hover {
    transform: scale(1.05);
    border: 2px solid #42ff00; /* Green border on hover */
  }

  .image-container {
    width: 100%;
    height: 60%; /* Adjust the height ratio for the image container */
    overflow: hidden;
  }

  .city-image {
    width: 100%;
    height: 100%;
    object-fit: fill; /* Ensure the image covers the container */
  }

  .card-content {
    padding: 10px 20px;
  }

  .card-content h2 {
    margin: 10px 0;
    font-size: 1.5em;
  }

  .card-content p {
    color: #666;
    font-size: 1em;
  }
`;
