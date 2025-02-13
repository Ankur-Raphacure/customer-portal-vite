import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { RAZORPAY_KEY } from "../../../../config";
import CustomModal from "../../../../components/CustomModel";
import OrderConformation from "../../../../pages/Checkout/OrderConformation/OrderConformation";
import { paymentRetryAPI } from "./../../../../redux/slices/dashboard/dashboardService";
import { updateOrderDetailsAPI } from "../../../../redux/slices/checkout/checkoutService";

const PaymentActions = (props: any) => {
  const { item } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isRaphaPlus } = useSelector(
    (ReduxState: any) => ReduxState.auth,
  );

  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessageText, setShowSuccessMessageText] = useState(false);
  const [showConformationModel, setShowConformationModel] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const fullName = `${item?.user?.first_name} ${item?.user?.last_name}`;

  const loadJS = (FILE_URL: any, asyncVal = true) => {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", asyncVal.toString());

    document.body.appendChild(scriptEle);

    // success event
    scriptEle.addEventListener("load", () => {
      console.log("File loaded");
      if (
        window &&
        (window as any).PhonePeCheckout &&
        (window as any).PhonePeCheckout.transact
      ) {
        (window as any).PhonePeCheckout.transact((window as any).phonePeObj);
      }
    });
    // error event
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading file", ev);
    });
  };

  const handlePayNow = async (merchant: any) => {
    console.log("Merchant", merchant);
    const resp = await dispatch(
      paymentRetryAPI({ bookingId: item?.id, merchant: merchant || "" }),
    );
    console.log("resp resp", resp);
    if ((resp as any)?.payload?.success) {
      console.log(
        "resp?.payload?.data?.bookings?.id",
        (resp as any)?.payload?.data?.bookings?.id,
      );
      if ((resp as any)?.payload?.data?.payment) {
        let paymentObj = (resp as any)?.payload?.data?.payment;
        if (paymentObj.razorpay_order_id) {
          openPaymentBox((resp as any)?.payload?.data?.payment);
        } else {
          handlePhoePecheckout((resp as any)?.payload?.data?.payment);
        }
        console.log("payload?.data?.payments");
      } else {
        console.log("going to dashboard");
        history.push("/dashboard/bookings");
      }
    } else if ((resp as any)?.error?.message) {
      setErrorMessage((resp as any)?.error?.message);
      console.log("resp?.error?.message", (resp as any)?.error?.message);
    }
  };

  const openPaymentBox = async (payment: any) => {
    console.log("openPaymentBox vinod");
    try {
      // TODO - Call backend to create order
      //const order = await axios.post('/create-order', { amount: 500 }); // Amount should be dynamic based on actual usage

      const options = {
        key: RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        amount: payment.amount, //order.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: payment.currency, //order.data.currency,
        name: "Raphacure",
        description: "Booking Transactions",
        image: "https://placehold.co/128x128.png",
        order_id: payment.razorpay_order_id,
        handler: function (response: any) {
          /*{razorpay_payment_id: 'pay_NzhHE5w6TkpQGe', razorpay_order_id: 'order_Nzh0BDacK8XfXu', razorpay_signature: '63d4e358e86caaaec40b1b3405f943a837b37f38650d49d32f139ba5e2565410'}
           */
          updateOrder(payment.id, response);
        },
        //TODO - change the prefills
        prefill: {
          name: fullName,
          email: item?.user?.email,
          contact: item?.user?.phone,
        },
        theme: {
          color: "#9747ff",
        },
        modal: {
          ondismiss: function () {
            closedWithoutPayment();
          },
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      // displayRazorpay(options);
      console.log("rzp1rzp1rzp1", rzp1);
      rzp1.open();
    } catch (error) {
      console.error("Error: rzp1", error);
    }
  };

  const updateOrder = async (id: any, data: any) => {
    console.log("id", id);
    console.log("datadata", data);
    const body = { body: { order: data }, id: id };
    try {
      const resp = await dispatch(updateOrderDetailsAPI(body));
      console.log("respres presp", resp);
      if ((resp as any)?.payload?.success) {
        // toast.add({ title: "Booking created successfully", color: "accent" });
        // gotoDashboard();
        // showAlertMessage(
        //   "Booking created successfully. Please check order status from dashboard"
        // );
        // localStorage.removeItem("raphaCart");
        // dispatch(updateCartItems([]));
        setShowConformationModel(true);
      } else {
        showAlertMessage("Booking created successfully");
        // toast.add({ title: "Booking created successfully", color: "accent" });
        // gotoDashboard();
        console.log("going to dashboard");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const handlePhoePecheckout = (paymentObj: any) => {
    if (!paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url) {
      closedWithoutPayment();
      return;
    } else {
      (window as any).phonePecallback = (response: any) => {
        console.log("PhonepecallbackResponse", response);
        if (response === "USER_CANCEL") {
          closedWithoutPayment();
          return;
        } else if (response === "CONCLUDED") {
          console.log("going to dashboard");
          setShowConformationModel(true);
          return;
        }
      };
      if (
        window &&
        (window as any).PhonePeCheckout &&
        (window as any).PhonePeCheckout.transact
      ) {
        (window as any).PhonePeCheckout.transact({
          tokenUrl:
            paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url,
          callback: (window as any)?.phonePecallback,
          type: "IFRAME",
        });
      } else {
        (window as any).phonePeObj = {
          tokenUrl:
            paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url,
          callback: (window as any).phonePecallback,
          type: "IFRAME",
        };
        loadJS("https://mercury-stg.phonepe.com/web/bundle/checkout.js", true);
      }
    }
  };

  const closedWithoutPayment = () => {
    showAlertMessage("Payment failed. Please retry");
    // toast.add({
    //   title: "Payment failed. Please retry from patient dashboard",
    //   color: "red",
    // });
  };

  const showAlertMessage = (msg: any) => {
    setShowSuccessMessageText(msg);
    setShowSuccessMessage(true);
  };

  return (
    <>
      <CustomModal
        show={showSuccessMessage}
        titleText={showSuccessMessageText}
        deleteText="Ok"
        cancelText=""
        onDelete={() => {
          setShowSuccessMessage(false);
          history.push("/dashboard/bookings");
        }}
      />

      <OrderConformation
        showModal={showConformationModel}
        handleModalShow={() => {
          setShowConformationModel(false);
          history.push("/dashboard/bookings");
        }}
      />
      <div>
        {errorMessage && (
          <div>
            <p className="error_message"> {errorMessage}</p>
          </div>
        )}
        <div className="payment-actions">
          <button
            className="plain-button payment-button-razorpay"
            onClick={() => handlePayNow("razorPay")}
          >
            Pay with Razorpay ₹{" "}
            {item?.final_amount?.toFixed(2).toLocaleString("en-US")}
          </button>
          {/* {!isRaphaPlus && (
          <button
            className="plain-button payment-button-phonepe"
            onClick={() => handlePayNow("phonePe")}
          >
            Pay with PhonePe ₹{" "}
            {item?.final_amount?.toFixed(2).toLocaleString("en-US")}
          </button>
        )} */}
        </div>
      </div>
    </>
  );
};

export default PaymentActions;
