import fetch from "cross-fetch";
import moment from "moment";
import _ from "lodash";

import Axios from "axios";
import { toast } from "react-toastify";
import { gotoLoginPage } from "./../../Scenes/common";

const hostName = window.location.host;
export const get = async function (url) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "X-Frontend": hostName,
      Authorization: "Bearer " + getToken(),
      key: getKey(),
    };
    const response = await Axios.get(url, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    // if (error?.response?.status === 401) {
    //   toast.error("Your Session has Expired please relogin");
    //   localStorage.removeItem("user");
    //   setTimeout(() => {
    //     alert("Your Session has Expired please relogin")
    //     window.location.reload();
    //   }, 2000);
    // }
    throw new Error(
      error?.response?.data?.message ||
        error?.response?.data?.statusMessages?.[0],
    );
  }
};
export const put = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "X-Frontend": hostName,
      Authorization: "Bearer " + getToken(),
      key: getKey(),
    };
    const response = await Axios.put(url, body, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
        error?.response?.data?.statusMessages?.[0],
    );
  }
};
export const post = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "X-Frontend": hostName,
      Authorization: "Bearer " + getToken(),
      key: getKey(),
    };
    const response = await Axios.post(url, body, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
        error?.response?.data?.statusMessages?.[0],
    );
  }
};
export const del = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "X-Frontend": hostName,
      Authorization: "Bearer " + getToken(),
      key: getKey(),
    };
    const response = await Axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(error?.response?.data?.statusMessages?.[0]);
  }
};
export const patch = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "X-Frontend": hostName,
      Authorization: "Bearer " + getToken(),
      key: getKey(),
    };
    const response = await Axios.patch(url, body, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
        error?.response?.data?.statusMessages?.[0],
    );
  }
};
const getToken = () => {
  const accessToken =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("user"))?.accessToken
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : undefined;
  return accessToken;
};

const getKey = () => {
  const user_key1 = localStorage.getItem("user_key");
  const user_key =
    user_key1 && user_key1 != null && user_key1 != "null"
      ? user_key1
      : undefined;
  return user_key;
};
