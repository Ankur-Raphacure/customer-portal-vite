import React from "react";
import styled from "styled-components";
import right from "../../assets/images/right.png";
import qr from "../../assets/images/qrcode.png";
import ind from "../../assets/images/ind_logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SuccessIcon = styled.div`
  color: green;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
  display: inline-block;
  opacity: 0.8;
  opacity: 0.8;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 20rem;
`;

const CardFooter = styled.div`
  background-color: #f0e4ff;
  width: 90%;
  padding: 8px;
  border-radius: 10px;
  text-align: center;
  color: #9747ff;
  font-size: 16px;
  font-weight: 500;
`;

const CardHeader = styled.div`
  margin-top: 2rem;
  background-color: #a259ff;
  width: 20rem;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const CardHeaderimg = styled.div`
  display: flex;
  height: 2rem;
  margin-left: 1.5rem;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 6rem;
`;
const DownloadButton = styled.button`
  margin-top: 30px;
  background-color: #a259ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 90%;
`;
const FormSubtitle = styled.div`
  margin-top: 1rem;
  width: 435px;
  position: relative;
  font-size: 15px;
  line-height: 58.8px;
  font-weight: 500;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(90deg, #9747ff, #00edff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
`;

const ABHACard = () => {
  return (
    <Container>
      <SuccessIcon>
        <img src={right} alt="National Health Authority" />
      </SuccessIcon>
      <Title>ABHA Address created Successfully</Title>
      <FormSubtitle>ABHA (Health ID) Card</FormSubtitle>
      <CardHeader>
        <CardHeaderimg>
          {" "}
          <img src={ind} alt="National Health Authority" />
        </CardHeaderimg>{" "}
      </CardHeader>
      <Card>
        <CardBody>
          <div>
            <h5 className="mb-1">Ajmal C</h5>
            <p className="mb-1">Ajmalc@abdm</p>
            <p className="mb-0">Male</p>
          </div>

          <div>
            <img src={qr} alt="QR Code" />
          </div>
        </CardBody>
      </Card>
      <CardFooter>Your ABHA Card is ready</CardFooter>
      <DownloadButton>Download Your ABHA Card Now</DownloadButton>
    </Container>
  );
};

export default ABHACard;
