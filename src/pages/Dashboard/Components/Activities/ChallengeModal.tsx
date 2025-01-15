import React from "react";
import { Modal, Button, Input, DatePicker, Row, Col } from "antd";
import { CareStyled } from "./CareStyled.Styled";
import { ReactComponent as Challege } from "../../../../assets/icons/challenge.svg";

const { TextArea } = Input;

const ChallengeModal = ({ visible, onCancel }: any) => {
  return (
    <CareStyled>
      <Modal
        title={
          <div className="modal-title">
            Challenge
            <Challege className="mx-3" />
          </div>
        }
        visible={visible}
        onCancel={onCancel}
        footer={null}
        className="challenge-modal"
      >
        <CareStyled>
          <Row gutter={16}>
            <Col span={12}>
              <label>Name</label>
              <Input placeholder="Enter challenge name" />
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "16px" }}>
            <Col span={12}>
              <label>Duration / daily</label>
              <Input placeholder="Enter duration" addonAfter="Days" />
            </Col>
            <Col span={12}>
              <label>Duration / daily</label>
              <Input placeholder="Enter duration" addonAfter="Hour" />
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "16px" }}>
            <Col span={24}>
              <label>Invitation</label>
              <TextArea
                rows={4}
                placeholder="Enter your invitation message"
                className="shadow-none"
              />
            </Col>
          </Row>
          <div className="modal-footer">
            <button onClick={onCancel} className="btn cancel-btn me-4">
              Cancel
            </button>
            <button className="btn send-btn">Send Invitation</button>
          </div>
        </CareStyled>
      </Modal>
    </CareStyled>
  );
};

export default ChallengeModal;
