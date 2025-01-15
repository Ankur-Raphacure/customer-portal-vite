import Modal from "react-bootstrap/Modal";
import { PlystorePopUpStyled } from "./PlystorePopUp.styled";
import { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";

function PlystorePopUp(props: any) {
  const [openShareModel, setOpenShareModel] = useState<any>(false);
  const shareURL = window.location.href;

  return (
    <>
      <ShareModal
        show={openShareModel}
        url={shareURL}
        title="Share on"
        handleClose={() => {
          setOpenShareModel(false);
        }}
        onCopyClick={() => {
          navigator.clipboard.writeText(shareURL);
        }}
      />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="custom-modal-width"
      >
        <PlystorePopUpStyled>
          <Modal.Header closeButton></Modal.Header>
          <div className="download-app-div">
            <div className="download-app-text-div">
              <h5>Download Raphacure App Now</h5>
            </div>
            <div className="download-app-qr-div">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736505583010.png" alt="" />
              <div className="download-app-sub-text-div">
                <h5>Scan Here to download App</h5>
              </div>
              <div className="download-app-btn-div">
                <button
                  className="btn  "
                  onClick={() => {
                    setOpenShareModel(true);
                  }}
                >
                  Share Download Link
                </button>
              </div>
            </div>
          </div>
        </PlystorePopUpStyled>
      </Modal>
    </>
  );
}

export default PlystorePopUp;
