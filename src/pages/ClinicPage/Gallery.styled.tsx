import styled from "styled-components";

export const GalleryStyled = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  min-height: 50vh;

  .gallery {
    clip-path: polygon(
                0% 0%,  /* Top left */
                25% 10%, /* Top shrink start */
                75% 10%, /* Top shrink end */
                100% 0%, /* Top right */
                100% 100%, /* Bottom right */
                75% 90%, /* Bottom shrink end */
                25% 90%, /* Bottom shrink start */
                0% 100%  /* Bottom left */
            );
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .react-multi-carousel-item img {
    height: 25rem;
  }

  .paragraph {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  .paragraph p {
    margin: 0;
    font-family: Inter;
    color: #171a1f;
    font-size: 18px;
    width: 100%;
  }

  .container {
    margin-top: 10rem;
    position: relative;
    top: 100%;
    /* left: 50%; */
    width: 300px;
    /* transform: translate(-50%, -50%); */
    height: 400px;
    perspective: 2000px;
  }

  .ring {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 0.1s ease-out;
    cursor: grab;
  }

  .ring.grabbing {
    cursor: grabbing;
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    backface-visibility: hidden;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .img.active {
    transform: scale(0.8); /* Makes center image smaller */
  }

  .img.side {
    transform: scale(1.2); /* Makes side images larger */
  }

  .container:hover {
    .img {
      opacity: 0.5 !important;
    }
    .img:hover {
      opacity: 1 !important;
    }
  }

  .view-all {
    width: 7%;
    text-decoration: underline;
    font-size: 18px;
    font-weight: 400;
    color: #252b61;
    border: none;
    background: none;
  }

  .meta-link {
    position: fixed;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    z-index: 10000;
  }

  #source-link {
    top: 60px;
  }
  #yt-link {
    top: 10px;
  }

  .meta-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .meta-link span {
    color: white;
    font-family: sans-serif;
  }

  .meta-link i.fas {
    color: rgb(94, 106, 210);
  }
  .meta-link i.fab {
    color: rgb(219, 31, 106);
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }

    .paragraph {
      flex-direction: column;
      align-items: center;
      font-size: 0.9rem;
    }

    .container {
      width: 250px;
      height: 350px;
      scale: 0.8;
    }
  }

  @media (max-width: 890px) {
    .container {
      scale: 0.6;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .paragraph {
      font-size: 0.8rem;
    }

    .container {
      width: 200px;
      height: 300px;
      scale: 0.5;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75rem;
    }

    .container {
      width: 150px;
      height: 250px;
      scale: 0.4;
    }

    .meta-link {
      padding: 8px 16px;
      gap: 3px;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    .gallery {
      display: none;
    }

    .mobile-view {
      display: block;
    }

    h2 {
      margin: unset;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .paragraph {
      display: none;
    }
  }
`;
