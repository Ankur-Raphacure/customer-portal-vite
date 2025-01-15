import { PatientBenifitsStyled } from "./PatientBenifits.styled";

const PatientBenifits = () => {
  return (
    <PatientBenifitsStyled>
      <div className="Container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-6 Title">What Benefit Will You Get</h2>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">Instant Alerts</div>
                  </div>
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">Emergency Support</div>
                  </div>
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">Customized Care</div>
                  </div>
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">24/7 Health Monitoring</div>
                  </div>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">Secure Data</div>
                  </div>
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">Expert Assistance</div>
                  </div>
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">Free Service</div>
                  </div>
                  <div className="BenefitItem">
                    <div className="CheckIcon" />
                    <div className="BenefitText">
                      Integration with Google Fit
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="position-relative mt-3 img-div">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414404430.png"
                alt="Benefits Illustration"
                className="img-fluid"
                style={{ maxWidth: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </PatientBenifitsStyled>
  );
};

export default PatientBenifits;
