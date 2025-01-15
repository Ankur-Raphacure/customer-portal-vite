import React, { useEffect, useState } from "react";
import { BloodBankListStyled } from "./BloodBankList.style";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllBloodTestsAPI } from "../../redux/slices/bloodbank/bloodBankService";
import { useHistory } from "react-router-dom";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

interface Clinic {
  id: string;
  name: string;
  address: string;
}

interface BloodBankListProps {
  clinicsData: Clinic[];
}

const BloodBankList: React.FC<BloodBankListProps> = ({ clinicsData }) => {
  const [show, setShow] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [selectedVendor, setselectedVendor] = useState("");
  const history = useHistory();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  // const [bloodBankStore, setBloodBankStore] = useState([]);
  const dispatch = useDispatch();
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const bloodComponents = [
    "Whole Blood",
    "Single Donor Platelet",
    "Single Donor Plasma",
    "Sagm Packed Red Blood Cells",
    "Platelet Rich Plasma",
    "Platelet Poor Plasma",
    "Platelet Concentrate",
    "Plasma",
    "Packed Red Blood Cells",
    "Leukoreduced RBC",
    "Irradiated RBC",
    "Fresh Frozen Plasma",
    "Cryoprecipitate",
    "Cryo Poor Plasma",
  ];

  const addToCart = async (bloodTest: any, vendor: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      console.log("bloodTest : ", bloodTest);
      console.log("vendor : ", vendor);

      // await dispatch(
      //   handleAddToCart({
      //     ...itemR,
      //     notes: allAmbulanceList?.distance,
      //     fromAddress: { ...fromAddressObj, ...fromLocation },
      //     toAddress: { ...toAddressObj, ...toLocation },
      //     categoryName: "ambulance",
      //     collection_1_date: startedDateValue,
      //   })
      // );
      // history.push("/checkout");
    }
  };
  const handleBookBtn = async () => {
    if (selectedBloodGroup && selectedBloodType) {
      const selectedName = `${selectedBloodType} - ${selectedBloodGroup}`;
      const res = await dispatch(getAllBloodTestsAPI());
      const bloodtests = JSON.parse(JSON.stringify(res));
      const bloodBankStore = bloodtests.payload.data.bloodTests;
      const test = bloodBankStore.find(
        (item: any) => item.test.service_name === selectedName
      );

      if (test && selectedVendor) {
        addToCart(test, selectedVendor);
        // cartStore.addTestWithVendor(test, selectedVendor);
        // cartStore.openAddedToCartModal();
        setShow(false);
        toast.success("Appointment booked successfully");
      } else {
        toast.error("Blood not available at this location currently!");
      }
    } else {
      toast.error("Select both group and component");
    }
  };

  const handleBook = (vendor: any) => {
    setselectedVendor(vendor);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSelectBloodGroup = (group: string) => {
    setSelectedBloodGroup(group);
  };

  const handleSelectBloodType = (type: string) => {
    setSelectedBloodType(type);
  };

  return (
    <>
      <BloodBankListStyled>
        {clinicsData.map((clinic) => (
          <div key={clinic.id} className="hospital_item round-shadow">
            <div className="hospital_datalist">
              <div className="hospital_data">
                <div>
                  <h5>{clinic.name}</h5>
                </div>
                <p>{clinic.address}</p>
                <div className="btn-div">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleBook(clinic)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {show && (
          <div
            className="modal fade show"
            id="exampleModal"
            role="dialog"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="d-flex">
                  <div className="modal-body">
                    <label htmlFor="bloodGroup">Blood Group*</label>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle dropdown-btn"
                        type="button"
                        id="bloodGroup"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedBloodGroup || "Select Blood"}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="bloodGroup"
                      >
                        {bloodGroups.map((group) => (
                          <li key={group}>
                            <button
                              className="dropdown-item"
                              onClick={() => handleSelectBloodGroup(group)}
                            >
                              {group}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="modal-body">
                    <label htmlFor="bloodComponent">Blood Component*</label>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="bloodComponent"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedBloodType || "Select Component"}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="bloodComponent"
                      >
                        {bloodComponents.map((type) => (
                          <li key={type}>
                            <button
                              className="dropdown-item"
                              onClick={() => handleSelectBloodType(type)}
                            >
                              {type}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button className="btn btn-primary" onClick={handleBookBtn}>
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </BloodBankListStyled>
    </>
  );
};

export default BloodBankList;
