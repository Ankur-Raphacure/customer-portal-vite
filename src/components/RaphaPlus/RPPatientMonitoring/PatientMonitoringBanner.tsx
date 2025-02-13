import { PatientMoitoringBannerStyled } from "./PatientMonitoringBanner.styled";

const App = () => {
  return (
    <PatientMoitoringBannerStyled>
      <div className="Container">
        <div className="BackgroundImage">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415272016.png"
            alt=""
            className="img_div"
          />
        </div>
        <div className="Contents">
          <h5 className="Title">
            We’re here to Increase the quality of healthcare.
          </h5>
          <div className="lineDiv">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415152396.png"
              alt=""
            />
          </div>
          <p className="Subtitle">
            Managing a loved one's health with a busy lifestyle can be
            challenging. RaphaPlus Patient Monitoring offers comprehensive
            insights and assistance to make it easier.
          </p>
          <div className="ButtonDiv">
            <button className="btn Button">Request for demo</button>
          </div>
        </div>
      </div>
    </PatientMoitoringBannerStyled>
  );
};

export default App;
