import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
// import { ReactComponent as SuccessIcon } from "images/Review/checkbox-circle-fill.svg";
// import PrimaryButton from "components/Common/PrimaryButton";
// import OutlinedButton from "components/Common/OutlinedButton";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import clsx from "clsx";
import CloseButton from "react-bootstrap/CloseButton";
// import CloseIcon from "components/icons/Close";
import { OrderConformationStyled } from "./OrderConformation.styled";

const OrderConformation = (props: any) => {
  const history = useHistory();
  const { user, handleOrderTracking, subDomainDetails, paymentObj } = props;
  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();
  const [color, setColor] = useState("rgb(255, 255, 255)");
  //   const {
  //     allCheckoutModes,
  //     checkoutMode,
  //     checkoutItems,
  //     checkoutRemainingItems,
  //     productCheckoutCCValues,
  //   } = useSelector((state: any) => state.productCheckout);

  const handleWyhBooking = async (encryptedUserId: any, orderRes: any) => {
    console.log("Encrypted wyhUserId: ", encryptedUserId);
    console.log("orderRes : ", orderRes);

    const baseUrl = "https://aalizwell.in/api";

    try {
      // Step 1: Decrypt User ID
      const decryptionResponse = await fetch(
        `${baseUrl}/EncryptDecrypt/RSADecrypt`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ str: [encryptedUserId] }),
        },
      );

      const decryptionData = await decryptionResponse.json();

      if (
        !decryptionData?.success ||
        decryptionData?.data?.length === 0 ||
        !decryptionData?.data[0]?.decryptedStr
      ) {
        console.error("Decryption failed or invalid response", decryptionData);
        return;
      }

      const decryptedUserId = decryptionData.data[0].decryptedStr;
      console.log("Decrypted User ID: ", decryptedUserId);

      // Step 2: Get Auth Token
      const tokenResponse = await fetch(`${baseUrl}/MarketPlace/GetToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          PartnerId:
            "hSG+yRSxdXXnLCS/lGFGuGawykpzwBVYjMvQk40VMOdIRrQJOkQp7yjN/BEkRD+sRMZ8nck+4hYBosPVj0k8SkDNggH7ZiKciyIGkBJgrse4hvYDm9yCjHhSfZJIgIebWcKmE3aNtuFk6Nh9bX8i1g26Yfob9yZuE/wONlq9oR4=",
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenData?.success || !tokenData?.data?.authToken) {
        console.error("Token generation failed or invalid response", tokenData);
        return;
      }

      const authToken = tokenData.data.authToken;
      console.log("Auth Token: ", authToken);

      // Step 3: Call TransactionDetails API
      const transactionBody = {
        UserId: encryptedUserId || "Unknown",
        paymentStatus: orderRes?.status || "Pending",
        modeofPayment: "GooglePay", // This could also be dynamically set if available
        paymentDate: orderRes?.updated_at
          ? new Date(orderRes.updated_at).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        paymentTime: orderRes?.updated_at
          ? new Date(orderRes.updated_at).toLocaleTimeString()
          : new Date().toLocaleTimeString(),
        paymentThruGateway: orderRes?.razorpay_order_id || "Unknown",
        paymentConfirmationID: orderRes?.razorpay_payment_id || "Unknown",
        typeofServicesBooked: "Self",
        dateofServiceBookedOn: orderRes?.created_at
          ? new Date(orderRes.created_at).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        dateofServicesBookedfor: orderRes?.updated_at
          ? new Date(orderRes.updated_at).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        timeofServicesBookedfor: "1 months", // Default value; update dynamically if needed
        servicesBookedFor: "SELF", // Static for now; can be updated
        orderID: orderRes?.id || "Unknown",
        orderstatus: orderRes?.status || "Unknown",
        invoice: orderRes?.id ? `INV${orderRes.id}` : "Unknown Invoice",
        reports: "RPt1", // Static; update if relevant data is available
        orderSummary: orderRes?.id
          ? `Order Summary for ${orderRes.id}`
          : "Order Summary Unknown",
        refundStatus: "N/A", // Default; can be updated if refund data is present
        refundID: null,
        refundRequestDate: null,
        refundProcessedDate: null,
        paymentSettlementDate: orderRes?.updated_at
          ? new Date(orderRes.updated_at).toISOString().split("T")[0]
          : null,
        paymentDetails: "Payment done now booked",
        modeOfRefund: null,
        cancellationOfservices: null,
        wrongOrder: null,
      };

      const transactionResponse = await fetch(
        `${baseUrl}/MarketPlace/TransactionDetails`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(transactionBody),
        },
      );

      const transactionData = await transactionResponse.json();

      if (!transactionData?.success) {
        console.error(
          "Transaction failed or invalid response",
          transactionData,
        );
        return;
      }

      console.log("Transaction successfully completed: ", transactionData);
    } catch (error) {
      console.error("Error in handleWyhBooking:", error);
    }
  };

  useEffect(() => {
    console.log("props : ", props);

    if (props?.showModal) {
      if (subDomainDetails?.subdomain_key === "wyh") {
        const wyhUserId = user?.wyhUserId;
        if (wyhUserId) {
          handleWyhBooking(wyhUserId, paymentObj);
        }
      }
    }
  }, [props]);

  const handleCheckoutNextStep = () => {
    window.location.reload();
  };
  const handleContinueShopping = () => {
    history.push("/");
  };

  return (
    <>
      <Modal
        show={props?.showModal}
        onHide={props?.handleModalShow}
        centered
        className="model-product-order-conformation"
      >
        <Modal.Body>
          <OrderConformationStyled>
            {/* {showCheckoutNextItems ? (
              <div className="order-conformation-top">
                <div>
                  <SuccessIcon />
                  <h2>Your order confirmed, Thank you!</h2>
                </div>
                <p>
                  Your order has been confirmed and will be shipping within next
                  two days.{" "}
                </p>
              </div>
            ) : ( */}
            <div className="order-conformation-top">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3986_213437)">
                    <path
                      d="M24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44ZM22.006 32L36.146 17.858L33.318 15.03L22.006 26.344L16.348 20.686L13.52 23.514L22.006 32Z"
                      fill="#12B886"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3986_213437">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2>Your Booking has been successfully created!!</h2>
              </div>
              <p>Once Booking is Confirmed we will update to you. </p>
            </div>
            {/* )} */}

            <div className="order-conformation-middle">
              <h4>Order ID: #ORD1234567890</h4>
              <div>
                {/* {checkoutItems?.map((item: any) => {
                  return (
                    <div className="row-order-box">
                      <div>
                        <img src={item?.image} />
                      </div>
                      <div>
                        <p>{item?.brand}</p>
                        <p>
                          Item#{item?.productId} | Qty: {item?.quantity}
                        </p>
                        <p>Sold by - {item?.brand}</p>

                        <p>Price - {item?.customerEntredPrice}</p>
                      </div>
                    </div>
                  );
                })} */}
              </div>
            </div>
            <div className="order-conformation-bottom">
              {user?.from_hr && user?.loginType != "doctorDashboard" ? (
                <div>
                  <button
                    className="continue-shopping-btn"
                    onClick={handleOrderTracking}
                  >
                    Go to HR Dashboard
                  </button>
                </div>
              ) : user?.from_hr && user?.loginType == "doctorDashboard" ? (
                <div>
                  <button
                    className="continue-shopping-btn"
                    onClick={handleOrderTracking}
                  >
                    Go to Doctor Dashboard
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <button
                      className="continue-shopping-btn"
                      onClick={handleContinueShopping}
                    >
                      Continue Shopping
                    </button>
                  </div>
                  <div className="bottom-button--tracking">
                    <button onClick={handleOrderTracking}>
                      Order Tracking
                    </button>
                  </div>
                </>
              )}
            </div>
          </OrderConformationStyled>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default OrderConformation;
