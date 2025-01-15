import { useState } from "react";
import { TrustedClientsStyled } from "./TrustedClients.styled";

const TrustedClients = ({ images }: any) => {
  return (
    <TrustedClientsStyled>
      <h3>Our Trusted Clients</h3>
      <div className="image-gallery">
        {images.map((path: any, index: any) => (
          <img
            key={index}
            src={path}
            alt={`Img ${index}`}
            className="image-item"
          />
        ))}
      </div>
      <h2>250+ Clients</h2>
    </TrustedClientsStyled>
  );
};

export default TrustedClients;
