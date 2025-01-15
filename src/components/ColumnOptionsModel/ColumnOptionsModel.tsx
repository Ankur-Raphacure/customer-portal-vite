import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ColumnOptionsModelStyled } from "./ColumnOptionsModel.styled";
import CloseButton from "react-bootstrap/CloseButton";

const ColumnOptionsModel = (props: any) => {
  return (
    <Modal
      {...props}
      className="column-Options-Model-popup"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        className={`modalBodyDefault alert-model-popup-sec dynamic_class_${props?.dynamicClassName}`}
      >
        <div className="new-option-header">
          <CloseButton onClick={props?.onHide} />
        </div>
        <ColumnOptionsModelStyled>
          <div>
            <div>column options</div>
          </div>
        </ColumnOptionsModelStyled>
      </Modal.Body>
    </Modal>
  );
};

export default ColumnOptionsModel;
