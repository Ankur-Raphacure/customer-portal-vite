import { ShopglassStyled } from "./Shopglasess.Styled";
import { useHistory } from "react-router-dom";

const SpecsDetail = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push("/eyecare/accessories/glasses");
  };
  return (
    <ShopglassStyled>
      <div className="specs-detail container">
        <button className="back-btn" onClick={handleBackClick}>
          Back
        </button>

        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="images">
              <div className="row image-row">
                <div className="col-lg-6 col-md-6 image-col">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338453289.png"
                    alt="preview-img"
                    className="image"
                  />
                </div>
                <div className="col-lg-6 col-md-6 image-col">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338453289.png"
                    alt="preview-img"
                    className="image"
                  />
                </div>
              </div>
              <div className="row  image-row">
                <div className="col-lg-6 col-md-6 image-col">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338503669.png"
                    alt="preview-img"
                    className="image"
                  />
                </div>
                <div className="col-lg-6 col-md-6 image-col">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338503669.png"
                    alt="preview-img"
                    className="image"
                  />
                </div>
              </div>
              <div className="row  mb-4 image-row">
                <div className="col-lg-6 col-md-6 image-col">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338503669.png"
                    alt="preview-img"
                    className="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 specs-details-right">
            <div className="product-info">
              <h4>Vincent Chase Full Rim</h4>
              <p className="product-size">Size: Medium, Brow Bar</p>
              <h3 className="product-price">₹2000</h3>
              <div className="color-options">
                <p>Frame + Lens</p>
                <div className="colors">
                  <span className="color-circle white"></span>
                  <span className="color-circle black"></span>
                  <span className="color-circle purple"></span>
                  <span className="color-circle red"></span>
                  <span className="color-circle blue"></span>
                  <span className="color-circle green"></span>
                </div>
              </div>
            </div>
            <h5>Bill Details</h5>
            <div className="bill-details">
              <div className="row">
                <div className="col">
                  <p>Item Total</p>
                  <p>Coupon SINGLE</p>
                  <p>Net Amount</p>
                  <p>Total Payable</p>
                </div>
                <div className="col text-right">
                  <p>₹2100</p>
                  <p className="discount">-₹100</p>
                  <p>₹2000</p>
                  <p>₹2000</p>
                </div>
              </div>
            </div>
            <div className="coupon-info">
              <div className="text">
                <p className="single">SINGLE applied</p>
                <p>You are saving ₹100</p>
              </div>
              <button className="remove-coupon">Remove</button>
            </div>
            <div className="buttons-row">
              <button className="book-now">Book Now</button>
              <button className="add-to-cart">Add To Cart</button>
            </div>
            <h5>Technical Information</h5>
            <div className="technical-info">
              <table>
                <tbody>
                  <tr>
                    <td>Product ID</td>
                    <td>27321</td>
                  </tr>
                  <tr>
                    <td>Model No.</td>
                    <td>UH0165B5-W</td>
                  </tr>
                  <tr>
                    <td>Frame</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Frame Width</td>
                    <td>139mm</td>
                  </tr>
                  <tr>
                    <td>Frame Dimensions</td>
                    <td>50-20-145</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ShopglassStyled>
  );
};

export default SpecsDetail;
