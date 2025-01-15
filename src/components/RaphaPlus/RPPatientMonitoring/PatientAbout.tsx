import { PatientAboutStyled } from "./PatientAbout.styled";

const PatientAbout = () => {
  return (
    <PatientAboutStyled>
      <div className="Container">
        <div className="FormWrapper">
          <div className="Title">Get In Touch</div>
          <div className="LableText">Login</div>
          <input
            type="text"
            className="form-control"
            placeholder="Email or phone number"
          />
          <div className="LableTexts">Message</div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label className="">Message</label>
          </div>
          <button className="btn Button">Request Demo</button>
          <div className="SubText">or Start Free Trial</div>
        </div>
        <div className="RightContainer">
          <div className="Heading">
            People are Saying About Rapha
            <sup className="plus-icon">+</sup>
          </div>
          <div className="SubHeading">
            RaphaPlus is your one-stop solution for all healthcare management
            needs, offering some of the most advanced features available.
          </div>
        </div>
      </div>
    </PatientAboutStyled>
  );
};

export default PatientAbout;
