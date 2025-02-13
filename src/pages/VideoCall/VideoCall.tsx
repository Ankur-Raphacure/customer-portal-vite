import React from "react";
import { StyledCompoent } from "./index.styled";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Input } from "antd";
import CopyButton from "../../components/CopyButton/CopyButton";
import { FaCopy } from "react-icons/fa";
import axios from "axios";
import {
  startRecordingAPI,
  stopRecordingAPI,
} from "./../../redux/slices/dashboard/dashboardService";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// function generateToken(tokenServerUrl: any, userID: any) {
//   // Obtain the token interface provided by the App Server
//   return fetch(
//     `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
//     {
//       method: 'GET',
//     }
//   ).then((res) => res.json());
// }
function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}
function randomID(len: any) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

const VideoCall = () => {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("roomID", roomID);
  // App ID: 1432998644
  // Bucket name: zegocloud-videos
  // Region: ap-south-1
  // AWS_SECRET_KEY: 4N8/HYPOF675pb6u6a5gCW5FHAGBwbAQKaEHaQXl
  // AWS_ACCESS_KEY: AKIAWZWMAKTEWSE7WRNG
  const stopRecordCall = async () => {
    dispatch(stopRecordingAPI({ roomID }));
  };
  const startRecordCall = async () => {
    dispatch(startRecordingAPI({ roomID }));
    // const timeStampNo = new Date().getTime() + 600000;
    // var timeStamp = Math.round(Date.now() / 1000);
    // const Url1 = `https://cloudrecord-api.zego.im/?Action=StartRecord&AppId=1432998644&SignatureNonce=15215528852396&Timestamp=${timeStamp}&Signature=7a2c0f11145fb760d607a07b54825013&SignatureVersion=2.0&IsTest=false`;
    // const body1 = {
    //   RoomId: roomID,
    //   RecordInputParams: {
    //     RecordMode: 1,
    //     StreamType: 3,
    //     MaxIdleTime: 60,
    //   },
    //   RecordOutputParams: {
    //     OutputFileFormat: "mp4",
    //     OutputFolder: `record/${roomID}/`,
    //   },
    //   StorageParams: {
    //     Vendor: 1,
    //     Region: "ap-south-1",
    //     Bucket: "zegocloud-videos",
    //     AccessKeyId: "AKIAWZWMAKTEWSE7WRNG",
    //     AccessKeySecret: "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",
    //   },
    // };
    // // const headers = {
    // //   "Content-Type": "application/json",
    // //   Authorization:
    // //     "Bearer jWhRzcaX0Wqrj6wfCj2rf0CVMjn4cjY6pfCxyIhHvIpsGMDwWcS8EGyMRKUg",
    // // };
    // // setIsLoading(true);
    // const response = await axios.post(Url1, body1);
    // // setIsLoading(false);
    // // if (response?.data?.data?.tiny_url) {
    // //   setShotUrl(response?.data?.data?.tiny_url);
    // // }
    // console.log("vinod", response);
  };

  let myMeeting = async (element: any) => {
    // generate Kit Token
    const appID = 1432998644;
    const serverSecret = "5946ad8ca535e7848f6cc939d450a702";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5),
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      onInRoomTextMessageReceived: (values: any) => {
        console.log("valuesvaluesvalues", values);
        console.log("live strted call", values);
      },
      onJoinRoom: () => {
        console.log("valuesvaluesvalues");
        console.log("live strted call");
        startRecordCall();
      },

      onLeaveRoom: () => {
        console.log("valuesvaluesvalues");
        console.log("live end call");
        stopRecordCall();
      },

      // joinRoom()
    });
  };
  const winUrl = window.location.href;
  return (
    <StyledCompoent>
      <div className="coming-soon-container">
        <div className="d-flex flex-column gap-3">
          <div className="info-text-sec">
            <p>
              If you want to join your family members, Please send below link to
              join
            </p>
          </div>
          <Input
            style={{ width: "100%", maxWidth: "500px" }}
            value={winUrl}
            readOnly
            addonAfter={
              <CopyButton text={winUrl}>
                <FaCopy
                  style={{ verticalAlign: "-.125em", cursor: "pointer" }}
                />
              </CopyButton>
            }
          />
        </div>
        <div
          className="myCallContainer"
          ref={myMeeting}
          style={{
            width: "100vw",
            height: "100vh",
            paddingBottom: "100px",
            marginTop: "50px",
            marginBottom: "150px",
          }}
        ></div>
      </div>
    </StyledCompoent>
  );
};

export default VideoCall;
