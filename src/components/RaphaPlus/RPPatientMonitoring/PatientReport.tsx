import { PatientReportStyled } from "./PatientReport.styled";

const PatientReport = () => (
  <PatientReportStyled>
    <div className="Main-div d-flex">
      <div className="right-div">
        <h2>How we support our pratner all over the India</h2>
        <p className="Sub-title mt-4">
          We track all vitals, assign a dedicated doctor to manage and update
          treatments, and offer 24/7 support with a wide network of healthcare
          providers ready to assist promptly.
        </p>
        <div className="d-flex reting-Maindiv">
          <div className="reting-div">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="rating">4.9 / 5 rating</p>
            <p className="rating-txt">On time responce</p>
          </div>
          <div className="reting-div">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="rating">4.9 / 5 rating</p>
            <p className="rating-txt">On time responce</p>
          </div>
        </div>
      </div>
      <div className="left-div">
        <div className="container ">
          <div className="row service">
            <div className="col-2 d-flex align-items-center justify-content-center icon-div">
              <i className="service-icon bi bi-heart-pulse">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413112201.png" alt="" />
              </i>
            </div>
            <div className="col-10">
              <h5 className="service-title">Health education</h5>
              <p className="service-description">
                Wellness programs provide valuable information on maintaining
                health.
              </p>
            </div>
          </div>
          <div className="row service">
            <div className="col-2 d-flex align-items-center justify-content-center icon-div">
              <i className="service-icon bi bi-clock-history">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png" alt="" />
              </i>
            </div>
            <div className="col-10">
              <h5 className="service-title">Immediate care</h5>
              <p className="service-description">
                Vital tracking and 24/7 support help us keep your health in
                check and respond immediately to any risks.
              </p>
            </div>
          </div>
          <div className="row service">
            <div className="col-2 d-flex align-items-center justify-content-center icon-div">
              <i className="service-icon bi bi-person-circle">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png" alt="" />
              </i>
            </div>
            <div className="col-10">
              <h5 className="service-title">Engagement</h5>
              <p className="service-description">
                You have a dedicated doctor for ongoing engagement, available to
                answer your questions anytime.
              </p>
            </div>
          </div>
          <div className="row service">
            <div className="col-2 d-flex align-items-center justify-content-center icon-div">
              <i className="service-icon bi bi-person-plus">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png" alt="" />
              </i>
            </div>
            <div className="col-10">
              <h5 className="service-title">Personalized treatment</h5>
              <p className="service-description">
                Experience personalized treatment with tailored care plans
                designed specifically for your needs.
              </p>
            </div>
          </div>
          <div className="row service">
            <div className="col-2 d-flex align-items-center justify-content-center icon-div">
              <i className="service-icon bi bi-person-plus">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png" alt="" />
              </i>
            </div>
            <div className="col-10">
              <h5 className="service-title">Reduced travel</h5>
              <p className="service-description">
                With everything available at your fingertips, you enjoy reduced
                commute time and increased convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="Container">
      <div className="left-section">
        <div className="title">
          How we support our partner all over the world
        </div>
        <div className="subtitle">
          SaaS become a common delivery model for many business application,
          including office so>Health education</div>
            <div ftware, messaging software, payroll processing
          software, DBMS software, management software
        </div>
        <div className="rating-container">
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="rating-text">4.9 / 5 rating</div>
            <div className="rating-subtext">On time response</div>
          </div>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐</div>
            <div className="rating-text">4.8 / 5 rating</div>
            <div className="rating-subtext">Quick problem solving</div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="support-item">
          <div className="icon">
            <img src={activity} alt="Health education" />
          </div>
          <div className="text-container">
            <div className="item-title"className="item-subtitle">
              Wellness programs provide valuable information on maintaining
              health.
            </div>
          </div>
        </div>
        <div className="support-item">
          <div className="icon">
            <img src={commond} alt="Immediate care" />
          </div>
          <div className="text-container">
            <div className="item-title">Immediate care</div>
            <div className="item-subtitle">
              Wellness programs provide valuable information on maintaining
              health.
            </div>
          </div>
        </div>
        <div className="support-item">
          <div className="icon">
            <img src={pi} alt="Engagement" />
          </div>
          <div className="text-container">
            <div className="item-title">Engagement</div>
            <div className="item-subtitle">
              Quickly navigate you and engage with your audience.
            </div>
          </div>
        </div>
        <div className="support-item">
          <div className="icon">
            <img src={commond} alt="Personalized treatment" />
          </div>
          <div className="text-container">
            <div className="item-title">Personalized treatment</div>
            <div className="item-subtitle">
              Tailored care plans address individual health needs.
            </div>
          </div>
        </div>
        <div className="support-item">
          <div className="icon">
            <img src={commond} alt="Reduced travel" />
          </div>
          <div className="text-container">
            <div className="item-title">Reduced travel</div>
            <div className="item-subtitle">
              Less commuting time means more time for work and rest.
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </PatientReportStyled>
);

export default PatientReport;
