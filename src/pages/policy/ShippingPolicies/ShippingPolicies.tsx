import logo from "../../../assets/images/logo.webp";
import "../styles.css";

const ShippingPolicies = () => {
  return (
    <div className="p-3">
      <img
        alt=""
        title=""
        src={logo}
        className="p-2 prescription-banner opacity-10 container fixed bgImage"
      />
      <span>
        <h1>Shipping Policy</h1>
      </span>
      <div className="text-justify sub">
        Thank you for choosing RaphaCure for your healthcare needs. We offer
        maximum comfort and reliability in turning in your medicines and
        healthcare products to your step. Please review the following delivery
        policy to apprehend how we method and deliver your orders.
        <p className="strong">Shipping Methods and Times:</p>
        Standard Shipping: Orders are commonly processed within 3 working days
        and delivered within 7 working days, depending on your region.
        <p className="strong">Shipping Charges:</p>
        Shipping expenses range depending on product, location and weight. We
        may provide free shipping promotions for orders above a certain value.
        Please take a look at our website or promotional emails for the offers.
        <p className="strong">Shipping Restrictions:</p>
        We follow all local, state and nationwide regulations regarding the
        cargo of prescription medicinal drugs and healthcare merchandise. Some
        merchandise can be limited from transport to certain locations because
        of legal or logistical reasons. We will notify you if there are any such
        restrictions.
        <p className="strong">International Shipping:</p>
        At this time, we only provide shipping inside India. We do not deliver
        across the world.
        <p className="strong">Order Tracking:</p>
        Once your order is processed and shipped, you will receive a
        confirmation e-mail and progress reports.
        <p className="strong">Delivery Issues:</p>
        In the uncommon event of a delivery problem including a misplaced or
        broken package, please contact our customer support team at +91 95551
        66000 or email us at wellness@raphacure.com immediately. We will work
        with our delivery companions to resolve the issue at the earliest.
        <p className="strong">Returns and Refunds:</p>
        Please check our returns and refunds policy on returning products and
        receiving refunds for eligible objects.
        <p className="strong">Contact Us:</p>
        If you have any questions or issues regarding our delivery policy or
        your order's delivery, please don't hesitate to contact our customer
        service team. You can contact us by way of phone (+91 95551 66000),
        email (wellness@raphacure.com) or through our website chat option.
        <p className="strong">Policy Updates:</p>
        We reserve the right to update our shipping policy as needed. Any
        changes may be communicated to our customers via our website and
        different suitable channels.
        <br />
        Thank you for selecting RaphaCure. We appreciate your choosing us for
        your healthcare needs.
      </div>
    </div>
  );
};

export default ShippingPolicies;
