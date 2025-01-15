import React from "react";
import { TeamStyled } from "./Team.styled";
import YouImg from "../../assets/you.jpeg";
import ProfilePicture from "./ProfilePicture";
import { teamMembers } from "./data";

const generateImageUrl = (filename: any) =>
  `https://raphacure-public-images.s3.ap-south-1.amazonaws.com/team/${filename}`;

const Team = () => (
  <TeamStyled className="team">
    <h2 className="team-title">Passionate Team</h2>
    <div className="team-members">
      {teamMembers.map((member, index) => {
        try {
          return (
            <ProfilePicture
              key={index}
              defaultImage={generateImageUrl(member.images[0])}
              topImage={generateImageUrl(member.images[1])}
              topRightImage={generateImageUrl(member.images[2])}
              rightImage={generateImageUrl(member.images[3])}
              bottomRightImage={generateImageUrl(member.images[4])}
              bottomImage={generateImageUrl(member.images[5])}
              bottomLeftImage={generateImageUrl(member.images[6])}
              leftImage={generateImageUrl(member.images[7])}
              topLeftImage={generateImageUrl(member.images[8])}
              clickImage={generateImageUrl(member.images[9])}
              altText={member.name}
            />
          );
        } catch (error) {
          console.error(`Error rendering member ${member.name}:`, error);
          return null;
        }
      })}
      <div className="team-member" title="You">
        <img src={YouImg} alt="You" className="team-member-image" />
      </div>
    </div>
  </TeamStyled>
);

export default Team;
