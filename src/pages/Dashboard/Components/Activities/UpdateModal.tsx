import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "antd";
import { CareStyled } from "./CareStyled.Styled";
import cnform_img from "../../../../assets/images/dashboard/cnform_img.png";

const UpdateModal = ({ visible, onCancel, goal }: any) => {
  const data = Array.isArray(goal?.activities)
    ? goal.activities[goal.activities.length - 1]
    : null;

  const [steps, setSteps] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [conformVisible, setConformVisible] = useState(false);
  const [conformTrackVisible, setConformTrackVisible] = useState(false);

  const handleAdd = () => {
    // If data already has steps, skip validation and proceed
    if (data?.goal_quantity) {
      setConformVisible(true);
      return;
    }

    // Validate only if no steps are entered
    if (steps.trim() === "") {
      alert("Please enter a valid number of steps");
      return;
    }

    // Proceed with showing confirmation
    setConformVisible(true);

    // Prepare updated data
    const updatedGoal = {
      ...goal,
      activities: { ...data, goal_quantity: steps }, // Update the steps
    };

    // Call update function or API to save changes
    // handleUpdate(updatedGoal);
  };

  const handleConformOk = () => {
    if (onCancel) {
      onCancel();
    }
    setConformVisible(false);
    setIsModalVisible(false);
    setConformTrackVisible(false);
  };

  useEffect(() => {
    if (data?.goal_quantity) {
      setSteps(data.goal_quantity); // Set initial value
    }
  }, [data?.goal_quantity]);

  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        className="update-modal"
      >
        <CareStyled>
          {goal?.activity_name === "Daily_steps" && (
            <div className="modal-content">
              <h3>How many steps you walk today ?</h3>
              <div className=" d-flex justify-content-center">
                <Input
                  placeholder="Enter number of steps"
                  value={steps} // Control the input with steps state
                  onChange={(e) => setSteps(e.target.value)} // Update steps on change
                  type="text"
                  className="col-md-8 mt-3 d-flex justify-content-center"
                />
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleAdd}
                  className="btn btn-outline send-btn"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Workout" && (
            <div className="modal-content">
              <h3>How many hours you workout today ?</h3>
              <div className=" d-flex justify-content-center">
                <Input
                  placeholder="Enter Hours"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  type="text"
                  className="col-md-8 mt-3 d-flex justify-content-center"
                />
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleAdd}
                  className="btn btn-outline send-btn"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Cycling" && (
            <div className="modal-content">
              <h3>How long you drove today ?</h3>
              <div className=" d-flex justify-content-center">
                <Input
                  placeholder="Enter Km"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  type="text"
                  className="col-md-8 mt-3 d-flex justify-content-center"
                />
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleAdd}
                  className="btn btn-outline send-btn"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Water" && (
            <div className="modal-content">
              <h3>How many liters of water you had today ?</h3>
              <div className=" d-flex justify-content-center">
                <Input
                  placeholder="Enter Ltr"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  type="text"
                  className="col-md-8 mt-3 d-flex justify-content-center"
                />
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleAdd}
                  className="btn btn-outline send-btn"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Mood" && (
            <div className="modal-content">
              <h3>How many steps you walk today ?</h3>
              <div className=" d-flex justify-content-center">
                <Input
                  placeholder="Enter number of steps"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  type="text"
                  className="col-md-8 mt-3 d-flex justify-content-center"
                />
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleAdd}
                  className="btn btn-outline send-btn"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Habit" && (
            <div className="modal-content">
              <h3>How many steps you walk today ?</h3>
              <div className=" d-flex justify-content-center">
                <Input
                  placeholder="Enter number of steps"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  type="text"
                  className="col-md-8 mt-3 d-flex justify-content-center"
                />
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleAdd}
                  className="btn btn-outline send-btn"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
        </CareStyled>
      </Modal>
      {/* Common POPUP Div */}
      <Modal
        visible={conformVisible}
        onCancel={handleConformOk}
        footer={null}
        className="update-modal"
      >
        <CareStyled>
          <div className="modal-content activity-header-text border-bottom-0">
            <div className="conform-image-div">
              <img src={cnform_img} alt="" />
            </div>
            <div className="goal-head mt-4 conform-goal-title">
              <h3>{`${goal?.title} Successfully Updated.`}</h3>
            </div>

            <div className="modal-footer">
              <Button
                type="primary"
                onClick={handleConformOk} // This now handles both modals
                className="btn btn-outline send-btn"
              >
                Ok
              </Button>
            </div>
          </div>
        </CareStyled>
      </Modal>
    </>
  );
};

export default UpdateModal;
