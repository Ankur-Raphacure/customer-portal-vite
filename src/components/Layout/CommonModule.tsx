import React, { useContext, useEffect, useMemo, useState } from "react";
import LoginModel from "./../../components/LoginModel/LoginModel";
import { useDispatch, useSelector } from "react-redux";
import {
  updateShowLoginModel,
  updateShowAddressSearchModel,
} from "../../redux/slices/auth/authSlice";
import TopAddressSelectionModel from "./../../components/TopAddressSelectionModel/TopAddressSelectionModel";
const CommonModule = () => {
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  const [showAdressModel, setShowAdressModel] = useState(false);
  const dispatch = useDispatch();
  const { showLoginModel, showAddressSearchModel } = useSelector(
    (routeR: any) => routeR.auth
  );

  useEffect(() => {
    if (showLoginModel) {
      dispatch(updateShowLoginModel(false));
      handleLogin();
    }
  }, [showLoginModel]);
  useEffect(() => {
    if (showAddressSearchModel) {
      dispatch(updateShowAddressSearchModel(false));
      handleLoginForAddress();
    }
  }, [showAddressSearchModel]);

  const handleLogin = () => {
    setShowLoginPopupModel(true);
  };

  const handleLoginForAddress = () => {
    setShowAdressModel(true);
  };
  const handleClose = () => {
    setShowLoginPopupModel(false);
    setShowAdressModel(false);
  };
  return (
    <>
      <LoginModel show={showLoginPopupModel} handleClose={handleClose} />
      <TopAddressSelectionModel
        show={showAdressModel}
        handleClose={handleClose}
      />
    </>
  );
};
export default CommonModule;
