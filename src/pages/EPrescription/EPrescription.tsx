import React, { useEffect, useState } from "react";
import { EPrescriptionStyled } from "./EPrescription.styled";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getPrescriptionDataAPI } from "../../redux/slices/bookingScreen/bookingScreenService";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import PrescriptionPreview from "../Dashboard/Components/Bookings/PrescriptionDocument";
import { toast } from "react-toastify";
import { formatStatus } from "../../Scenes/common";

const EPrescription = (props: any) => {
  const { prescId } = props?.match?.params;
  const dispatch = useDispatch();
  const [prescData, setPrescData] = useState<any>();
  const history = useHistory();
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const getPrescriptionData = async () => {
    if (!prescId) {
      return;
    }
    const res = (await dispatch(getPrescriptionDataAPI(prescId))) as any;
    const data = res?.payload;
    console.log("data : ", data);
    setPrescData(data);
  };

  useEffect(() => {
    getPrescriptionData();
  }, [prescId]);

  const handlePrescriptionPreview = async () => {
    console.log("id : ", prescId);
    if (!prescId) {
      toast.error("Prescription ID Not found");
      return;
    }
    const res = (await dispatch(getPrescriptionDataAPI(prescId))) as any;
    const data = res?.payload;
    setPreviewData(data);
    setShowPreviewModal(true);
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const TablesWrapper = () => {
    if (!prescData || !prescData.attachments) return null;

    // Filter medicines by category
    const brandedMedicines =
      prescData.attachments[0]?.prescriptions_medicines?.filter(
        (medicine: any) => medicine?.medicine?.category_key === "branded",
      ) || [];

    const genericMedicines =
      prescData.attachments[0]?.prescriptions_medicines?.filter(
        (medicine: any) => medicine?.medicine?.category_key === "generic",
      ) || [];

    const labTests = prescData.attachments[0]?.prescriptions_tests || [];

    const renderTable = (title: string, medicines: any[]) => (
      <div className="table-section">
        <h3>{title}</h3>
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Brand</th>
              <th>Dosage</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Frequency</th>
              <th>No Of Days</th>
              <th>Intake</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine: any, index: any) => (
              <tr key={medicine?.id}>
                <td>{index + 1}</td>
                <td>{medicine?.medicine?.service_name}</td>
                <td>{medicine?.dosage}</td>
                <td>Tablet</td>
                <td>{medicine?.count}</td>
                <td>{medicine?.frequency}</td>
                <td>{medicine?.no_of_days}</td>
                <td>{medicine?.intake}</td>
                <td>{medicine?.medicine?.price?.actual_cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-section">
          <span>
            Total:{" "}
            {medicines.reduce(
              (sum: any, medicine: any) =>
                sum + medicine?.medicine?.price?.actual_cost,
              0,
            )}
          </span>
        </div>
      </div>
    );

    return (
      <div className="tables-wrapper">
        {/* Render Branded Medicines Table if not empty */}
        {brandedMedicines.length > 0 &&
          renderTable("Branded Medicines", brandedMedicines)}

        {/* Render Generic Medicines Table if not empty */}
        {genericMedicines.length > 0 &&
          renderTable("Generic Medicines", genericMedicines)}

        {/* Render Lab Tests Table if not empty */}
        {labTests.length > 0 && (
          <div className="table-section">
            <h3>Lab Tests/Scan Check Up Prescribed By Doctor</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Lab Test Name</th>
                  <th>Type</th>
                  <th>Parameters</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {labTests.map((test: any, index: any) => (
                  <tr key={test?.id}>
                    <td>{index + 1}</td>
                    <td>{test?.test?.service_name}</td>
                    <td>
                      {test?.test?.service_code?.startsWith("ctmri")
                        ? "Scan / Ctmri"
                        : "Lab Test"}
                    </td>
                    <td>3</td>
                    <td>{test?.test?.price?.actual_cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-section">
              <span>
                Total:{" "}
                {labTests.reduce(
                  (sum: any, test: any) => sum + test?.test?.price?.actual_cost,
                  0,
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <EPrescriptionStyled>
      <div className="presc-wrapper">
        <div className="prescription-container">
          <div className="profile-section">
            <FaRegUserCircle size={32} />

            <div className="user-info">
              <h2 className="user-name">
                {prescData?.user?.first_name || ""}{" "}
                {prescData?.user?.last_name || ""}
              </h2>
              <p className="user-details">
                Age: <span>{prescData?.user?.age || ""}</span> Gender:{" "}
                <span>{prescData?.user?.gender || ""}</span>
              </p>
              <p className="user-details">
                DOB: <span>{prescData?.user?.dob || ""}</span> Phone:{" "}
                <span>{prescData?.user?.phone || ""}</span>
              </p>
              <p className="purpose">
                Purpose: <span> {formatStatus(prescData?.type || "")}</span>
              </p>
            </div>
          </div>
          <div className="appointment-info">
            <p className="doctor-name">DR. {prescData?.doctor?.name}</p>
            <p className="date">
              Date: <span> {prescData?.collection_1_date}</span>
            </p>
            <p className="time">
              Time:
              <span>{prescData?.collection_1_slot}</span>
            </p>
            {/* <p className="mode">
              Mode: <span>🏠</span>
            </p> */}
          </div>
        </div>
        <TablesWrapper />
      </div>
      <div className="btnWrapper">
        <Button className="download" onClick={handlePrescriptionPreview}>
          Download PDF
        </Button>
        <Button onClick={goToCart}>Go To Patient Cart</Button>
      </div>

      <PrescriptionPreview
        data={previewData}
        showPreviewModal={showPreviewModal}
        setShowPreviewModal={setShowPreviewModal}
      />
    </EPrescriptionStyled>
  );
};

export default EPrescription;
