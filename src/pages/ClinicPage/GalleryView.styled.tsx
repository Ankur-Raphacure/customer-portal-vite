import styled from "styled-components";

export const GalleryViewStyled = styled.div`
  .gallery-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 900px;
    /* height: 900px; */
    margin: auto;
    overflow: hidden;
  }

  .gallery-images {
  display: flex;
  transition: transform 0.6s ease-in-out;
  /* clip-path: polygon(
    0% 0%, 25% 10%, 75% 10%, 100% 0%, 100% 100%, 75% 90%, 25% 90%, 0% 100%
  ); */
  
  width: 100%;
}

.gallery-image {
  flex: 1 0 33.33%; /* Show three images */
  margin: 0 5px;
  transform: scale(0.9);
  transition: transform 0.6s ease-in-out;
}

  .gallery-images.left {
    transform: translateX(-20%);
  }

  .gallery-images.right {
    transform: translateX(20%);
  }

  .gallery-image img {
    width: 400px;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .arrow-btn.left {
    left: 10px;
  }

  .arrow-btn.right {
    right: 10px;
  }

  .arrow-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
