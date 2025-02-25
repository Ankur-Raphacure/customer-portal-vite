import { Tooltip } from "antd";
import React, { useCallback } from "react";
import { IoMdShare } from "react-icons/io";
import { LuForward } from "react-icons/lu";
import { useHistory } from "react-router-dom";
import { messageTypeDto } from "../../pages/Chat/type";

type prop = {
  data: {
    data: any;
    type?: messageTypeDto;
    isKeyValuedData: boolean;
  };
  replacePath: boolean;
  iconType?: "SHARE" | "FORWARD";
  tooltipTitle?: string;
};
const ShareMessages = ({
  data,
  replacePath,
  iconType = "SHARE",
  tooltipTitle,
}: prop) => {
  const history = useHistory();

  const handleShare = useCallback(() => {
    console.log(data, "data123");

    if (replacePath) {
      history.replace("/chat#share", { data });
    } else {
      history.push("/chat#share", { data });
    }
  }, []);

  if (iconType == "FORWARD") {
    return (
      <>
        <Tooltip title={tooltipTitle ?? ""}>
          <LuForward onClick={handleShare} size={18} />
        </Tooltip>
      </>
    );
  }
  return (
    <>
      <Tooltip title={tooltipTitle ?? ""}>
        <IoMdShare onClick={handleShare} size={18} />
      </Tooltip>
    </>
  );
};

export default ShareMessages;
