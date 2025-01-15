import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Instruction = styled.p`
  width: 435px;
  position: relative;
  font-size: 16px;
  color: #000;
  text-align: center;
  display: inline-block;
  opacity: 0.5;
`;

const OTPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const OTPInput = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #9747ff;
  }
`;

const SubmitButton = styled.button`
  background-color: #9747ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a189a;
  }
`;

const OTPAbha = ({ onSubmit }: any) => {
  return (
    <Container>
      <Instruction>
        Enter OTP received on phone number (XXXXXXX428) linked with your Aadhar
      </Instruction>
      <OTPContainer>
        {[...Array(6)].map((_, index) => (
          <OTPInput key={index} type="text" />
        ))}
      </OTPContainer>
      <SubmitButton onClick={onSubmit}>Submit OTP</SubmitButton>
    </Container>
  );
};

export default OTPAbha;
