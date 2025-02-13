import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubscriptions,
  addCouponCodeAPI,
} from "../../../../redux/slices/dashboard/dashboardService";
import { Space, Table, Tag } from "antd";
import "antd/dist/antd.css";

const Coupons = (props: any) => {
  const { handleBookNow } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { myAllSubscriptions } = useSelector(
    (ReduxState: any) => ReduxState.dashboard,
  );
  console.log("myAllSubscriptions", myAllSubscriptions);
  const isWallets = myAllSubscriptions?.wallets?.length > 0 ? true : false;

  useEffect(() => {
    dispatch(getAllSubscriptions());
  }, []);
  useEffect(() => {
    if (isWallets) {
      history.push("/dashboard/subscriptions");
    }
  }, [isWallets]);

  const handleSubmit = async () => {
    if (couponCode) {
      const body = {
        code: couponCode,
      };
      setIsLoading(true);
      const resp = (await dispatch(addCouponCodeAPI(body))) as any;
      setIsLoading(false);
      console.log("respresp", resp);
      if (resp?.payload?.success) {
        setErrorMessage("");
        history.push("/dashboard/subscriptions");
      } else {
        setErrorMessage(resp?.error?.message);
      }
    }
  };
  return (
    <div>
      <br />
      <div className="coupon_code_section">
        <h2>My Coupons</h2>
        <div className="coupon_code_section_content">
          <div>
            <input
              className="input_coupon_code"
              value={couponCode}
              onChange={(e) => {
                setErrorMessage("");
                setCouponCode(e.target.value);
              }}
              placeholder="Please Enter Coupon Code"
            />
          </div>
          {errorMessage && <p className="error_message">{errorMessage}</p>}

          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <br />
      <div></div>
    </div>
  );
};

export default Coupons;
