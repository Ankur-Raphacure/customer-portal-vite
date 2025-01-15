import { ReactComponent as ArrowIcon } from "../../../assets/raphaplus/arrow.svg";
import { RPHomeStyled } from "./RPHome.styled";
import { Link, useHistory } from "react-router-dom";
import { HospitalStyled } from "../Hospital/Hospital.styled";
const RPHome = () => {
  const history = useHistory();
  return (
    <RPHomeStyled>
      <div className="HomeContainer">
        <div className="LeftSection">
          <h1 className="Title">
            Healthcare that <span>treats</span> you right
          </h1>
          <button className="Button">Already a member?</button>
        </div>
        <div className="RightSection">
          <div
            className="CardsContainer"
            style={{ gridTemplateColumns: "1fr" }} // tmp styles
          >
            <div
              className="Card"
              style={{ maxWidth: "400px", margin: "auto" }} // tmp styles
              onClick={() => history.push("/raphaplus/hospital-management")}
            >
              <div className="CardIcon">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405472282.png" alt="" />
              </div>
              <h3 className="CardTitle">Hospital Management</h3>
              <p className="CardDescription">
                A management software that helps you manage everything in your
                office like staff, pharmacy, library, and more.
              </p>
              <div className="CardLink">
                <ArrowIcon />
              </div>
            </div>
            {/* <div
              className="Card"
              onClick={() => history.push("/raphaplus/ehs")}
            >
              <div className="CardIcon">
                <img src={healthRep} alt="" />
              </div>
              <h3 className="CardTitle">EHS (electronic health system)</h3>
              <p className="CardDescription">
                Will offer all sorts of patient tracking and reminding features
                using AI. You can monitor each patient's overall health.
              </p>
              <div className="CardLink">
                <ArrowIcon />
              </div>
            </div>
            <div className="FullWidthCardContainer">
              <div
                className="Card"
                onClick={() => history.push("/raphaplus/digital-clinic")}
              >
                <div className="CardIcon">
                  <img src={reception} alt="" />
                </div>
                <h3 className="CardTitle">Digital Clinic</h3>
                <p className="CardDescription">
                  Online site to showcase services, book your appointments, &
                  access various doctors virtually instead of referrals.
                </p>
                <div className="CardLink">
                  <ArrowIcon />
                </div>
              </div>
              <div
                className="Card"
                onClick={() => history.push("/raphaplus/patient-monitoring")}
              >
                <div className="CardIcon">
                  <img src={medExaminer} alt="" />
                </div>
                <h3 className="CardTitle">Patient Monitoring</h3>
                <p className="CardDescription">
                  Here you can view all bookings and analytics of your patients,
                  their issues, commonly recommended medicines.
                </p>

                <div className="CardLink">
                  <ArrowIcon />
                </div>
              </div>
              <div
                className="Card"
                onClick={() => history.push("/raphaplus/software-sol")}
              >
                <div className="CardIcon">
                  <img src={globalSol} alt="" />
                </div>
                <h3 className="CardTitle">Software Solutions</h3>
                <p className="CardDescription">
                  All this combined into one full management software for
                  patients and corporate offices as well.
                </p>
                <div className="CardLink">
                  <ArrowIcon />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <HospitalStyled>
        <div className="compare-benefits">
          <h2>
            Compare Benefits With{" "}
            <span className="text-underline-effect">RAPHA</span>
            <sup className="plus-icon">+</sup>
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th className="th primeHead">
                  Rapha<sup className="plus-icon">+</sup> Feature
                </th>
                <th className="th">
                  <img className="icon" src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405595221.png" alt="Rapha+" />
                </th>
                {/* <th className="th">
                  <PractoIcon
                    style={{
                      height: "20px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </th>
                <th className="th">
                  <img className="icon" src={EkaCareIcon} alt="Eka.Care" />
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature">Invoice Management</td>
                <td className="td">Yes</td>
                {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
              </tr>
              <tr>
                <td className="feature">EMR View & Trends</td>
                <td className="td">Yes</td>
                {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
              </tr>
              <tr>
                <td className="feature">Appointment Scheduling</td>
                <td className="td">Yes</td>
                {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
              </tr>
              <tr>
                <td className="feature">Digital Prescriptions</td>
                <td className="td">Yes</td>
                {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
              </tr>
              <tr>
                <td className="feature">Pharmacy Management</td>
                <td className="td">Yes</td>
                {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
              </tr>
              <tr>
                <td className="feature">Analytics & Reporting</td>
                <td className="td">Yes</td>
                {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
              </tr>
              <tr>
                <td className="feature">Collaboration</td>
                <td className="td">Yes</td>
                {/* <td className="td">No</td>
                <td className="td">No</td> */}
              </tr>
              <tr>
                <td className="feature">External Emergency Support</td>
                <td className="td">Yes</td>
                {/* <td className="td">No</td>
                <td className="td">No</td> */}
              </tr>
              <tr>
                <td className="feature">Price per User per Month</td>
                <td className="td">Rs 25</td>
                {/* <td className="td">Price on request</td>
                <td className="td">Price on request</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </HospitalStyled>
    </RPHomeStyled>
  );
};

export default RPHome;
