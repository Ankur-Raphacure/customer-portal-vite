import logo from "../../../assets/images/logo.webp";
import "../styles.css";

const ReturnRefund = () => {
  return (
    <div className="p-3">
      <img
        alt=""
        title=""
        src={logo}
        className="p-2 prescription-banner opacity-10 container fixed bgImage"
      />
      <span>
        <h1>Return and return visits</h1>
      </span>

      <div className="text-justify sub">
        Your satisfaction with RaphaCure is our top priority. We understand that
        there may be times when you need to return products or get a refund.
        Please review the following policies to understand our return and refund
        policy.
        <p className="strong">Return items:</p>
        We accept eligible returns within 15 days from the date of purchase. To
        be eligible for a return, the product must be unused, unopened, and in
        its original packaging. Prescriptions cannot be returned due to
        statutory restrictions. Please contact our customer service team at +91
        95551 66000 or wellness@raphacure.com for confirmation before returning
        the product.
        <p className="strong">Refunds:</p>
        Once we have received your return and verified it is eligible, we will
        process your refund within 15 business days.
        <br />
        Refunds will be issued for the original payment method. Please note that
        shipping charges are non-refundable, and the customer is responsible for
        shipping costs unless the return is due to our error or a faulty
        product.
        <p className="strong">Damaged or damaged:</p>
        If you receive a damaged or damaged product, please contact our customer
        service team at +91 95551 66000 or wellness@raphacure.com immediately.
        We will arrange a replacement or refund depending on the circumstances.
        <br />
        For damaged goods, we may require photographic evidence to facilitate
        repairs.
        <p className="strong">Prescriptions for:</p>
        Drugs cannot be returned or dispensed due to legal restrictions.
        However, if you have any concerns about the efficacy or safety of any
        product, please speak with a healthcare provider or doctor.
        <p className="strong">Non-refundable items:</p>
        Some items may not be eligible for return or return for hygiene or
        safety reasons. These features include but are not limited to:
        <br />
        Open personal care products (e.g., pharmaceuticals, lubricants,
        lotions);
        <br />
        Used or opened medical devices
        <br />
        Items with broken seals cut out
        <br />
        <p className="strong">Updated Schedule:</p>
        We reserve the right to update our return and refund policy as needed.
        Any changes will be communicated to our customers through our website
        and other appropriate channels.
        <p className="strong">Contact:</p>
        If you have any questions or concerns about our returns and refund
        policy, please do not hesitate to contact our customer service team. You
        can reach us by phone +91 95551 66000, email – wellness@raphacure.com,
        or through the contact form on our website, www.raphacure.com.
        <br />
        Thank you for selecting RaphaCure. We appreciate your trust in us for
        your health care needs.
      </div>
    </div>
  );
};

export default ReturnRefund;
