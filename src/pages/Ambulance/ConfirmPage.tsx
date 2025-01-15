import { ConfirmPageStyled } from "./ConfirmPage.styled";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAmbulance, FaCircle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { ProgressBar } from "react-bootstrap";
import { ReactComponent as AmbulanceLoader } from "../../assets/icons/ambulanceLoader.svg";
import ProfilePicImg from "../../assets/Ellipse1.png";
import { IoSend } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgressLoaderContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 20px 0;
  text-align: center;
`;

const AmbulanceIcon = styled.div`
  margin: 10px 0;
  color: #ff6b6b;
`;

const LocationList = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const LocationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LocationText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const GradientProgressBar = styled(ProgressBar)`
  .progress-bar {
    background: linear-gradient(90deg, #9747ff, #00c9aa);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// const Title = styled.h2`
//   margin-bottom: 0.5rem;
// `;

const Message = styled.p`
  margin-bottom: 2rem;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
`;

const CancelButton = styled(Button)`
  width: 100%;
  &:hover {
    background: #ccc;
  }
`;

const WaitButton = styled(Button)`
  width: 100%;
  background: #9747ff;
  color: white;
  &:hover {
    background: #8640e1;
  }
`;

const AmbulanceSearch = ({ pickup, dest, setRideConfirmed }: any) => {
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [showCancelReqPopup, setShowCancelReqPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercent((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100); // Adjust the interval time (in ms) as needed for faster/slower progress

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progressPercent >= 100) {
      setRideConfirmed(true);
    }
  }, [progressPercent]);

  return (
    <Container>
      <ProgressLoaderContainer>
        <GradientProgressBar
          animated
          now={progressPercent}
          label={`${progressPercent}%`}
        />
      </ProgressLoaderContainer>
      <Title>Looking For Ambulance near you...</Title>
      <AmbulanceIcon>
        <AmbulanceLoader />
      </AmbulanceIcon>
      <LocationList>
        <LocationItem>
          <FaRegCircleDot color="#00C9AA" size={25} />
          <LocationText>{pickup}</LocationText>
        </LocationItem>
        <LocationItem>
          <FaRegCircleDot color="#FF0000" size={25} />
          <LocationText>{dest}</LocationText>
        </LocationItem>
      </LocationList>
      <CancelButton onClick={() => setShowCancelReqPopup(true)}>
        Cancel Request
      </CancelButton>
      {showCancelReqPopup && (
        <Overlay>
          <PopupContainer>
            <Title>Are you sure you want to cancel the ride?</Title>
            <Message>Your driver will be assigned shortly</Message>
            <ButtonContainer>
              <CancelButton onClick={() => setShowCancelReqPopup(false)}>
                Cancel Request
              </CancelButton>
              <WaitButton onClick={() => setShowCancelReqPopup(false)}>
                Wait for Driver
              </WaitButton>
            </ButtonContainer>
          </PopupContainer>
        </Overlay>
      )}
    </Container>
  );
};

// Styled components
const RideContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  .vehicle-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    margin: 10px;
  }

  .vehicle-details {
    flex: 1;
  }

  .vehicle-id {
    font-size: 16px;
    font-weight: bold;
  }

  .vehicle-model {
    color: gray;
    font-size: 14px;
  }

  .vehicle-rating {
    font-size: 14px;
    color: gray;
  }

  .rating {
    color: #f39c12;
  }

  .vehicle-images {
    display: flex;
  }

  .vehicle-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 5px;
  }

  .message-driver {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fc;
    border-radius: 8px;
    margin: 10px;
  }

  .message-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 8px 0 0 8px;
  }

  .send-button {
    background-color: #f8f9fc;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 0 8px 8px 0;
    display: flex;
    align-items: center;
  }

  .send-icon {
    color: gray;
    font-size: 20px;
  }

  .send-button:hover .send-icon {
    color: #000;
  }

  .location-selector {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    /* padding: 10px; */
  }

  .location-option {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .location-option + .location-option {
    border-top: 1px solid #e2e5ea;
  }

  .icon-selected {
    color: #00a;
    font-size: 20px;
  }

  .icon-unselected {
    color: #f00;
    font-size: 20px;
  }

  .location-option span {
    margin-left: 10px;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-top: 1px solid #e2e5ea;
    margin-top: 10px;
  }

  .action-button {
    flex: 1;
    background-color: #f8f9fc;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin: 0 5px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .action-button:hover {
    background-color: #e2e5ea;
  }
`;

const Header = styled.div`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const VehicleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const VehicleText = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const Rating = styled.div`
  color: #888;
  font-size: 0.9em;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const DestinationList = styled.div`
  margin-bottom: 20px;
`;

const Destination = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  & svg {
    margin-right: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RideButton = styled.button`
  background: #eee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  width: 48%;
`;

const SupportButton = styled(Button)`
  background: #f44336;
  color: #fff;
`;
const RideConfirmed = ({ pickup, dest }: any) => {
  const [showCancelRidePopup, setShowCancelRidePopup] = useState(false);

  return (
    <RideContainer>
      <Header>Arriving in 3 Minutes</Header>
      <div className="vehicle-info">
        <div className="vehicle-details">
          <div className="vehicle-id">KA 03 AG 1840</div>
          <div className="vehicle-model">Bolero</div>
          <div className="vehicle-rating">
            Ajmal <span className="rating">4.1★</span>
          </div>
        </div>
        <div className="vehicle-images">
          <img src={ProfilePicImg} alt="Ambulance" className="vehicle-image" />
          <img src={ProfilePicImg} alt="Person" className="vehicle-image" />
        </div>
      </div>
      <div className="message-driver">
        <input
          type="text"
          placeholder="Message driver"
          className="message-input"
        />
        <button title="Send" className="send-button">
          <IoSend className="send-icon" />
        </button>
      </div>

      <div className="location-selector">
        <div className="location-option">
          <FaRegCircleDot color="#00C9AA" size={25} />
          <span>{pickup}</span>
        </div>
        <div className="location-option">
          <FaRegCircleDot color="#FF0000" size={25} />
          <span>{dest}</span>
        </div>
        <div className="action-buttons">
          <button className="action-button" onClick={()=>setShowCancelRidePopup(true)}>Cancel Ride</button>
          <button className="action-button">Support</button>
        </div>
        {showCancelRidePopup && (
          <Overlay>
            <PopupContainer>
              <Title>Your driver will reach in less than 3 min?</Title>
              <Message>Still want to Cancel?</Message>
              <ButtonContainer>
                <CancelButton onClick={() => setShowCancelRidePopup(false)}>
                  Cancel Ride
                </CancelButton>
                <WaitButton onClick={() => setShowCancelRidePopup(false)}>
                  Wait for Driver
                </WaitButton>
              </ButtonContainer>
            </PopupContainer>
          </Overlay>
        )}
      </div>
    </RideContainer>
  );
};

const ConfirmPage = ({ pickup, dest }: any) => {
  const [rideConfirmed, setRideConfirmed] = useState(false);
  return (
    <ConfirmPageStyled>
      {rideConfirmed ? (
        <RideConfirmed pickup={pickup} dest={dest} />
      ) : (
        <AmbulanceSearch
          pickup={pickup}
          dest={dest}
          setRideConfirmed={setRideConfirmed}
        />
      )}
    </ConfirmPageStyled>
  );
};

export default ConfirmPage;
