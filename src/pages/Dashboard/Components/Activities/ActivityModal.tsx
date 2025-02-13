import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { PlusOutlined } from "@ant-design/icons";
import { Image } from "react-bootstrap";
import Steps from "../../../../assets/images/steps.png";
import Workout from "../../../../assets/images/workout.png";
import Water from "../../../../assets/images/water.png";
import Cycling from "../../../../assets/images/cycling.png";
import { CareStyled } from "./CareStyled.Styled";

interface ActivityModalProps {
  visible: boolean;
  onCancel: () => void;
  onAddActivity: (activity: string) => void;
}

const ActivityModal: React.FC<ActivityModalProps> = ({
  visible,
  onCancel,
  onAddActivity,
}) => {
  const [isNewActivityModalVisible, setNewActivityModalVisible] =
    useState(false);

  const activities = [
    { name: "Daily Steps", icon: Steps },
    { name: "Cycling", icon: Cycling },
    { name: "Water", icon: Water },
    { name: "Workout", icon: Workout },
    // You can add more activities here
  ];

  const handleAddNewActivity = () => {
    setNewActivityModalVisible(true);
  };

  const handleNewActivityCancel = () => {
    setNewActivityModalVisible(false);
  };

  return (
    <>
      {/* Main Activity Modal */}
      <Modal show={visible} onHide={onCancel} centered>
        <CareStyled>
          <Modal.Header closeButton className="Header-div">
            <Modal.Title>Add Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="activity-modal-container">
              {activities.map((activity, index) => (
                <div className="card cards-div">
                  <div className="activity-card" key={index}>
                    <Image src={activity.icon} className="img-div me-3" />
                    <h3>{activity.name}</h3>
                  </div>
                </div>
              ))}
              <button
                className="activity-card add-new"
                onClick={handleAddNewActivity}
              >
                <PlusOutlined className="me-2" />
                <h3>Add New</h3>
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="sub-popup">
              <button className="cancel-btn me-3" onClick={onCancel}>
                Cancel
              </button>
              <button
                className="send-btn"
                onClick={() => onAddActivity("Activity Name")}
              >
                Add Now
              </button>
            </div>
          </Modal.Footer>
        </CareStyled>
      </Modal>

      {/* New Activity Modal */}
      <Modal
        show={isNewActivityModalVisible}
        onHide={handleNewActivityCancel}
        centered
      >
        <CareStyled>
          <Modal.Header closeButton>
            <Modal.Title>Add New Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="new-activity-modal-content">
              <input
                type="text"
                placeholder="Enter Activity Name"
                className="me-3"
              />
              <button className="search-btn-div">Search</button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="cancel-btn" onClick={handleNewActivityCancel}>
              Cancel
            </button>
            <button
              className="send-btn"
              onClick={() => {
                // Handle the addition of the new activity
                handleNewActivityCancel();
              }}
            >
              Add Now
            </button>
          </Modal.Footer>
        </CareStyled>
      </Modal>
    </>
  );
};

export default ActivityModal;
