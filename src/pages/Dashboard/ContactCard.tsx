import React from "react";
import styled from "styled-components";

interface ContactCardProps {
  name: string;
  phone: string;
  email: string;
  avatarUrl?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  phone,
  email,
  avatarUrl,
}) => {
  return (
    <CardContainer>
      <HeaderSection>
        <AvatarCircle>
          {avatarUrl ? (
            <Avatar src={avatarUrl} alt={name} />
          ) : (
            <DefaultAvatar>{name.charAt(0)}</DefaultAvatar>
          )}
        </AvatarCircle>
      </HeaderSection>
      <ContentSection>
        <Name>{name}</Name>
        <ContactItem>{phone}</ContactItem>
        <ContactItem>{email}</ContactItem>
      </ContentSection>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const HeaderSection = styled.div`
  height: 80px;
  background: #92bdf6;
  position: relative;
`;

const AvatarCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  position: absolute;
  bottom: -45px;
  left: 5%;
  border: 4px solid #92bdf6;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #666;
`;

const ContentSection = styled.div`
  padding: 70px 24px 24px;
`;

const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

const PhoneIcon = styled.span`
  font-size: 20px;
`;

const EmailIcon = styled.span`
  font-size: 20px;
`;

export default ContactCard;
