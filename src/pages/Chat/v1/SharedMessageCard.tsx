import React from "react";
import styled from "styled-components";

export type messageTypeDto = "TEXT" | "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
type prop = {
  message: string;
  content: any;
  type: messageTypeDto;
};
const SharedMessageCard = ({ content, message, type }: prop) => {
  const cont = JSON.parse(content);
  if (type === "TEXT") {
    return (
      <StyledComp>
        <div className="sharedMessageInnerContent">
          {typeof cont == "string" ? (
            <>{cont}</>
          ) : (
            Object.keys(cont)?.map((key: string) => (
              <>
                <span className="mr-1">{key}: </span>
                <span>{cont?.[key]}</span>
                <br />
              </>
            ))
          )}
        </div>
      </StyledComp>
    );
  }
  return <></>;
};

export default SharedMessageCard;

const StyledComp = styled.div`

background: #fff;
padding: 10px;
border-radius: 7px 7px 0px 7px;
color: #001F3F;
font-size: 16px;
margin-bottom: 10px;

.sharedMessageInnerContent :{
  font-size: 16px;
    padding: 10px;
    /* border: 1px solid red; */
    // border-radius: 7px 7px 0px 7px;
    background: white;
    margin-bottom: 10px;
    .message: {

    }
}

}
`;
