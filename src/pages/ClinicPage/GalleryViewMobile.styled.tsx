import styled from "styled-components";

export const GalleryViewMobileStyled = styled.div`
  /* General container styles */
  .gallery-container {
    font-family: Arial, sans-serif;
    width: 100%;
    margin: 0 auto;
    padding: 16px 0px;
    box-sizing: border-box;
  }

  .gallery-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }

  .gallery-layout {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  /* Left section (Main Image + Two Below) */
  .gallery-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 2;
  }

  .gallery-main {
    width: 100%;
  }

  .gallery-main-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .gallery-bottom {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: 48%;
  }

  .gallery-bottom-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
  }

  /* Right section (Side Images) */
  .gallery-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .gallery-side-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
  }
  .gallery-view-all {
    margin-top: 20px;
    font-size: 14px;
    background: none;
    border: none;
    color: #1e1e1e;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 125px;
  }

  @media (max-width: 391px) {
    .gallery-layout {
      display: flex;
      flex-direction: row;
    }
  }
`;
