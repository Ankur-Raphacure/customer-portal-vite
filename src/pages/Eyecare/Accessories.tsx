
import { EyecareStyled } from "./Eyecare.styled";
import Accessoriescard from "./Accessoriescard";
import { useHistory } from "react-router-dom";
import UploadPrescription from "../../components/UploadPrescription/UploadPrescription";

const Accessories = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push("/eyecare");
  };

  return (
    <EyecareStyled>
      <div className="all-clinics">
        <div className="container">
          <div className="row">
            <button className="backbtn" onClick={handleBackClick}>
              Back
            </button>
          </div>

          <div className="bannerplace">
            <div className="row">
              <div className="col-md-8">
                <h2>
                  Upload Your Prescription & Get Perfect Glasses Delivered to
                  Your Door
                </h2>
                <p>
                  Simply upload your prescription, choose your frames, and leave
                  the rest to us
                </p>
                <UploadPrescription categoryName={"eye_care"} />
              </div>
              <div className="col-md-4">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736332196110.png" alt="eyecare-image " />
              </div>
            </div>
          </div>

          <div className="row">
            <Accessoriescard />
          </div>
        </div>
      </div>
    </EyecareStyled>
  );
};

export default Accessories;
