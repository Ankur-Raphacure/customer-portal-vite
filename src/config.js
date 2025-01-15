export const API_BASE = "/api";
export const GRAPH_BASE = "https://graph.facebook.com/v6.0";

let SERVER_IP_URL;
let CHAT_API_URL;
let API_KEY1;
let RAZORPAY_KEY1;
let MIXPANEL_ID1;

SERVER_IP_URL = "https://api.raphacure.co.in";
CHAT_API_URL = "https://chat-api.raphacure.com";
// SERVER_IP_URL = "http://localhost:3010";

API_KEY1 = "3G56qgYAvbKTRtmlVF9FGR81OfMdv7mAalwITG8hsweskPcfdchl1x7xfAljbajT";
RAZORPAY_KEY1 = "rzp_test_YMLgf8AoYKa96B";

const hostName = window.location.hostname;
// if (
//   hostName.indexOf("raphacure.com") !== -1 &&
//   hostName.indexOf("staging.raphacure.com") === -1
// ) {
//   console.log("111");
// }else{
//   console.log("222");
// }
let isLocalHost = false;
// isLocalHost = true;
if (typeof window !== "undefined") {
  if (
    (hostName.indexOf("raphacure.com") !== -1 &&
      hostName.indexOf("staging.raphacure.com") === -1) ||
    (hostName.indexOf("www.raphacure.com") !== -1 &&
      hostName.indexOf("www.staging.raphacure.com") === -1) ||
    (hostName.indexOf("raphaplus") !== -1 &&
      hostName.indexOf("staging.raphaplus") === -1) ||
    isLocalHost
  ) {
    SERVER_IP_URL = "https://api.raphacure.com";
    API_KEY1 =
      "WFBkQeEm2HlxnFAZBiRzDwo3QGTA1obUrr0QjHk6ULPX7zMEvHYyqcN5Q0zAq5oq";

    RAZORPAY_KEY1 = "rzp_live_U53u76LmNqgRlU";
    MIXPANEL_ID1 = "694cbea44058e24dfb1eadd28c383576";
  }
}
// production x-api-key => WFBkQeEm2HlxnFAZBiRzDwo3QGTA1obUrr0QjHk6ULPX7zMEvHYyqcN5Q0zAq5oq
// staging x-api-key => 3G56qgYAvbKTRtmlVF9FGR81OfMdv7mAalwITG8hsweskPcfdchl1x7xfAljbajT

export const SERVER_IP = SERVER_IP_URL;
export const CHAT_API = CHAT_API_URL;
const map_url =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDILWRZ3d-zi2xIjmATRtOUNkFJ8kEr4p0&libraries=places";
export const GOOGLE_MAP_URL = map_url;
export const MIXPANEL_ID = MIXPANEL_ID1;

export const MAP_KEY = "AIzaSyBItpkRUSb_676tK37K_3zGTcTVjU--0sw";
export const RAZORPAY_KEY = RAZORPAY_KEY1;
export const HIDE_NAV_BAR = false;
export const API_KEY = API_KEY1;
export const REACT_APP_FIREBASE_AUTH_DOMAIN =
  "raphacure-crm-chat.firebaseapp.com";
export const REACT_APP_FIREBASE_PROJECT_ID = "raphacure-crm-chat";
export const REACT_APP_FIREBASE_STORAGE_BUCKET =
  "raphacure-crm-chat.appspot.com";
export const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "646829193268";
export const REACT_APP_FIREBASE_APP_ID =
  "1:646829193268:web:3f97fbaebcd4de2ea53261";
export const REACT_APP_FIREBASE_MEASUREMENT_ID = "G-PPZ65536RS";
export const REACT_APP_FIREBASE_VAPID_KEY =
  "BPsXLb5sc-_9DIMp7KvoPsxJxJVlR4gpiCEZqH2gDn1T01mldyi6Iv-Zc";
export const REACT_APP_FIREBASE_API_KEY =
  "AIzaSyBaYWDS2z1sUnErhaISp1HHaXZAWLK6RTQ";
export const ZEGOCLOUD_CHAT_APPID = "611545724";
export const ZEGOCLOUD_CHAT_SERVER_SECRET = "06a13ba26d22409b705fe2e4fb9ef55c";
