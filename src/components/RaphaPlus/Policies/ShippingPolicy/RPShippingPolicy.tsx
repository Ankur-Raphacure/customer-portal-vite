import React from "react";
import { RPShippingPolicyStyled } from "./RPShippingPolicy.styled";
import QuickLinks from "../QuickLinks/QuickLinks";

const RPShippingPolicy = () => {
  return (
    <RPShippingPolicyStyled>
      <div className="policy-container">
        <div className="mainPolicyContent">
          <QuickLinks />
          <div className="policy-content">
            <h1>Shipping Policies</h1>
            <p>
              Thank you for choosing RaphaPlus for your healthcare needs. We
              offer maximum comfort and reliability in turning in your medicines
              and healthcare products to your step. Please review the following
              delivery policy to apprehend how we method and deliver your
              orders.
            </p>
            <p>Shipping Methods and Times:</p>
            <p>
              Standard Shipping: Orders are commonly processed within 3 working
              days and delivered within 7 working days, depending on your
              region.
            </p>
            <p>Shipping Charges:</p>
          </div>
        </div>
        <div className="morePolicyInfo">
          <p>
            Shipping expenses range depending on product, location and weight.
            We may provide free shipping promotions for orders above a certain
            value. Please take a look at our website or promotional emails for
            the offers. Shipping Restrictions:
          </p>
          <p>
            We follow all local, state and nationwide regulations regarding the
            cargo of prescription medicinal drugs and healthcare merchandise.
            Some merchandise can be limited from transport to certain locations
            because of legal or logistical reasons. We will notify you if there
            are any such restrictions.
          </p>
          <p>International Shipping:</p>
          <p>
            At this time, we only provide shipping inside India. We do not
            deliver across the world.
          </p>
          <p>Order Tracking:</p>
          <p>
            Once your order is processed and shipped, you will receive a
            confirmation e-mail and progress reports.
          </p>
          <p>Delivery Issues:</p>
          <p>
            In the uncommon event of a delivery problem including a misplaced or
            broken package, please contact our customer support team at +91
            95551 66000 or email us at wellness@raphaplus.in immediately. We
            will work with our delivery companions to resolve the issue at the
            earliest. Returns and Refunds:
          </p>
          <p>
            Please check our returns and refunds policy on returning products
            and receiving refunds for eligible objects.
          </p>
          <p>Contact Us:</p>
          <p>
            If you have any questions or issues regarding our delivery policy or
            your order's delivery, please don't hesitate to contact our customer
            service team. You can contact us by phone{" "}
            <strong> +91 95551 66000 </strong> email
            <strong> wellness@raphaplus.in</strong> or through our website chat
            option.
          </p>
          <p>Policy Updates:</p>
          <p>
            We reserve the right to update our shipping policy as needed. Any
            changes may be communicated to our customers via our website and
            different suitable channels. Thank you for selecting RaphaPlus. We
            appreciate your choosing us for your healthcare needs.
          </p>
        </div>
      </div>
    </RPShippingPolicyStyled>
  );
};

export default RPShippingPolicy;
