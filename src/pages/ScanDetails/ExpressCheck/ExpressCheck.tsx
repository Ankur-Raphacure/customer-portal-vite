import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkExpressBook } from "../../../redux/slices/labtest/labtestService";

const ExpressCheck = (props: any) => {
  const dispatch = useDispatch();
  const { item, labTestPackageServiceCode, labTestServiceCode } = props;

  const [error, setError] = useState<any>("");
  const [success, setSuccess] = useState<any>("");
  const [pin, setPin] = useState<any>("");

  const handleChange = (e: any) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setPin(value);
      if (value.length > 6) {
        setError("PIN must be a 6 digit number.");
      } else {
        setError("");
        setSuccess("");
        setLabelInActive(e);
      }
    } else {
      setError("Enter a valid PIN number.");
    }
  };

  const handleCheck = (evnt: any, vendorId: string) => {
    setLabelInActive(evnt);
    if (pin === "") {
      setError("Pincode is required.");
    } else if (pin.length !== 6) {
      setError("PIN must be exactly 6 digits.");
    } else {
      setError("");
      setSuccess("");
      handleExpressCheck(evnt, vendorId);
    }
  };

  const handleExpressCheck = async (evnt: any, vendorId: string) => {
    let body = {} as any;
    body.vendorId = vendorId;
    body.data = {} as any;
    body.data.zip = pin;
    if (labTestPackageServiceCode) {
      body.data.package_code = labTestPackageServiceCode;
    } else {
      body.data.test_code = labTestServiceCode;
    }

    const response = (await dispatch(checkExpressBook(body))) as any;
    console.log("response Expresss bOOk", response);
    if (response?.payload?.success) {
      setSuccess("The Express Book is available for the above pincode!");
      setLabelActive(evnt);
    } else {
      setError("Sorry, Express Book is not available for the above pincode!");
    }
  };

  const setLabelActive = (evnt: any) => {
    const el = evnt.target
      .closest(".availCenterContainer")
      .querySelector(".check-pin-div .checkbox label");
    el.classList.add("active");
  };

  const setLabelInActive = (evnt: any) => {
    const el = evnt.target
      .closest(".availCenterContainer")
      .querySelector(".check-pin-div .checkbox label");
    el.classList.remove("active");
  };

  return (
    <>
      <div className="row mt-2">
        <div className="d-flex-2">
          <div className="input-group col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pincode"
              aria-label="Enter Pincode"
              aria-describedby="basic-addon2"
              value={pin}
              onChange={handleChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleCheck(event, item?.id);
                }
              }}
            />
            <span
              className="input-group-text Check-lable me-2"
              id="basic-addon2"
              onClick={(evnt) => handleCheck(evnt, item?.id)}
            >
              Check
            </span>
          </div>
          <div className="col-md-10 mt-1-2-2 Check-Express-text">
            <span className="Available-div">Check Express Book Available</span>
          </div>
        </div>
      </div>
      <div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </>
  );
};

export default ExpressCheck;
