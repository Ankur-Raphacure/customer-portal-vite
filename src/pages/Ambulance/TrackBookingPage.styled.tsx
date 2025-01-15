import styled from "styled-components";

export const TrackBookingPageStyled = styled.div`
  .booking-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .mapsLocation {
    height: 50vh;
    width: 100%;
  }
  .fareGroup {
    margin-left: 1rem !important;
  }
  .fareGroup h2 {
    font-size: 1.2rem;
  }
  .fareGroup h3 {
    font-size: 0.8rem;
  }
  .input-group p {
    font-size: 0.9rem;
    margin: 0;
  }
  .track-button {
    background-color: #8f3dff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
  }
  .track-button:hover {
    background-color: #7a32e0;
  }
`;
