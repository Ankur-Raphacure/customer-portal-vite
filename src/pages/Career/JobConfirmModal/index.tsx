import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import tickIcon from "../../../assets/images/Career/tickIcon.svg";
import "./index.css";

function JobConfirmModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      className="job-confirm-modal"
      centered
    >
      <Modal.Body>
        <div className="success-sec d-flex justify-content-center flex-column align-items-center">
          <div className="">
            <img src={tickIcon} alt="success" />
          </div>
          <p className="notify-text">
            We have successfully received your application!{" "}
          </p>
          <hr />
          <p className="thanks-sec">
            We appreciate your Interest and Thanks for applying at raphacure,
            Bengaluru. We have received your application and currently under the
            process of reviewing applications. If your profile and experience
            align at what we are looking for, you will soon expect a phone call
            from our team to schedule your further rounds of interview.
          </p>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
      </Modal.Footer> */}
    </Modal>
  );
}

export default JobConfirmModal;
