import styled from "styled-components";

export const ProfilePictureStyled = styled.div`
  .profile-picture {
    position: relative;
    width: 100px;
    height: 100px;
    transition: transform 0.5s ease;
    cursor: pointer;
  }

  .profile-picture:hover {
    transform: scale(1.1);
  }

  .profile-picture__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
  }

  .profile-picture__image.clicked {
    filter: none;
  }

  .profile-picture__hover-zone {
    position: absolute;
    z-index: 1;
    scale: 3;
  }

  .profile-picture__hover-zone--top {
    top: 0;
    left: 25%;
    width: 50%;
    height: 25%;
  }

  .profile-picture__hover-zone--top-right {
    top: 0;
    right: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--right {
    top: 25%;
    right: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--bottom-right {
    bottom: 0;
    right: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--bottom {
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 25%;
  }

  .profile-picture__hover-zone--bottom-left {
    bottom: 0;
    left: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--left {
    top: 25%;
    left: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--top-left {
    top: 0;
    left: 0;
    width: 25%;
    height: 50%;
  }
`;
