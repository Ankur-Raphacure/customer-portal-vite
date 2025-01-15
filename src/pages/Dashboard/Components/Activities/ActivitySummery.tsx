import React, { useEffect, useState } from "react";
import Steps from "../../../../assets/images/steps.png";
import Workout from "../../../../assets/images/workout.png";
import Water from "../../../../assets/images/water.png";
import Cycling from "../../../../assets/images/cycling.png";
import { CareStyled } from "./CareStyled.Styled";
import ActivitySummeryGraph from "./ActivitySummeryGraph";
import ActivitySummaryGoalGraph from "./ActivitySummaryGoalGraph";

const activities = [
  { name: "Daily Steps", icon: Steps },
  { name: "Cycling", icon: Cycling },
  { name: "Water", icon: Water },
  { name: "Workout", icon: Workout },
];

const ActivitySummery = ({ handleBookNow }: any) => {
  const [selectedActivity, setSelectedActivity] = useState<string>("");

  const handleCardClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  useEffect(() => {
    console.log("selectedActivity : ", selectedActivity);
  }, [selectedActivity]);

  return (
    <CareStyled>
      <div className="">
        <div className="row mt-4">
          {activities.map((item: any, index: number) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div
                className="card h-100 text-center CardsStyled"
                onClick={() => handleCardClick(item.name)}
                style={{
                  border: `1px solid ${
                    selectedActivity === item.name ? "#9747FF" : "#959595"
                  }`,
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="card-img-top mt-4"
                  style={{
                    filter:
                      selectedActivity === item.name
                        ? "brightness(0) saturate(100%) invert(50%) sepia(88%) saturate(714%) hue-rotate(230deg) brightness(85%) contrast(92%)"
                        : "grayscale(100%)",
                    cursor: "pointer",
                    maxHeight: "25px",
                    objectFit: "contain",
                  }}
                />

                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: ` ${
                        selectedActivity === item.name ? "#9747FF" : "#959595"
                      }`,
                      cursor: "pointer",
                    }}
                  >
                    {item.name}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedActivity && (
          <div>
            {selectedActivity === "Daily Steps" && (
              <div>
                <div className="tracker-heading-div">
                  <h5>Last week </h5>
                  <select
                    name=""
                    id=""
                    className="tracker-heading-selector-div shadow-none"
                  >
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                  </select>
                </div>
                <div>
                  <ActivitySummeryGraph />
                </div>
                <div>{/* <ActivitySummaryGoalGraph /> */}</div>
              </div>
            )}
            {selectedActivity === "Cycling" && <div>Cycling Details</div>}
            {selectedActivity === "Water" && <div>Water Intake Details</div>}
            {selectedActivity === "Workout" && <div>Workout Details</div>}
          </div>
        )}
      </div>
    </CareStyled>
  );
};

export default ActivitySummery;
