import { AvailableTestsStyle } from "./AvailableTests.styled";

const AvailableTests = () => {
  return (
    <AvailableTestsStyle>
      <div className="main-card round-shadow">
        <div className="sub-cards-container">
          {[1].map((item, index) => (
            <div key={index} className="sub-card round-shadow-1">
              <div className="image-container">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736332737729.png"
                  alt={`Sub Card ${item}`}
                />
              </div>
            </div>
          ))}
          <div className="child-div">
            <div className="name-div">
              <h5>360 Health Checkup</h5>
              <p>20 Tests Included</p>
            </div>
            <div className="mt-2">
              <h6>899.00</h6>
            </div>
            <div>
              <p className="discripsion">Preparation needed for checkup</p>
            </div>
            <div className="d-flex main-discription-div">
              <div className="sub-discription-div">
                <p className="discripsion-div">
                  <img src="" alt="" />
                  10-12 hours fasting require
                </p>
                <p className="discripsion-div ">
                  <img src="" alt="" />
                  Water can be consumed
                </p>
              </div>
              <div className="button-container">
                <button className="btn btn-outline-primary">
                  View Details
                </button>
                <button className="btn primary">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AvailableTestsStyle>
  );
};

export default AvailableTests;
