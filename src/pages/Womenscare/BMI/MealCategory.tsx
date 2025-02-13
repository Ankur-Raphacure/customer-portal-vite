import React, { useEffect, useState } from "react";
import { BMICalculatorStyled } from "./BMICalculator.styled";
import { FaShare, FaArrowDown, FaPencilAlt, FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import DietPlanPreview from "./DietPlanPreview";
import { Button } from "antd";
import Loader from "../../../components/Loader/Loader";
import ShareModal from "../../../components/ShareModal/ShareModal";
import {
  createBkDiet,
  getBkDiet,
} from "../../../redux/slices/bookingScreen/bookingScreenService";

const cardData = [
  { id: 1, title: "Week", number: 1, name: "Week-1" },
  { id: 2, title: "Week", number: 2, name: "Week-2" },
  { id: 3, title: "Week", number: 3, name: "Week-3" },
  { id: 4, title: "Week", number: 4, name: "Week-4" },
];

// You may still use this array to enforce the order of meal times.
const timeSlots = ["Breakfast", "Lunch", "Dinner"];

const MealCategory = (props: any) => {
  const { id: bkId } = props.match?.params;
  const dispatch = useDispatch();
  const [isLoader, setIsLoader] = useState(false);
  const [dietPlan, setDietPlan] = useState<any>({});
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [openShareModel, setOpenShareModel] = useState<boolean>(false);

  // State to track which meal items are being edited.
  // The keys will be strings in the format: `${dayKey}_${slot}_${index}`
  const [editing, setEditing] = useState<{ [key: string]: boolean }>({});

  const shareURL = window.location.href;

  const handleCardClick = (id: number) => {
    setSelectedCard(id);
  };

  useEffect(() => {
    if (!bkId) {
      toast.error("Booking Id is not available");
      return;
    }
    getBkDietData();
  }, []);

  const addDietToBooking = async (dietPlan: any) => {
    if (!bkId) {
      toast.error("Booking Id is not available");
      return;
    }
    const payload = {
      booking_id: bkId,
      dietPlan: dietPlan,
    };
    const res: any = await dispatch(createBkDiet(payload));
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    }
    toast.success("Diet Plan Updated Successfully");
    getBkDietData();
  };

  const getBkDietData = async () => {
    setIsLoader(true);
    const res: any = await dispatch(getBkDiet(bkId));
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      setIsLoader(false);
      return;
    }
    // Assuming the API response has a dietPlan object as shown
    if (res?.payload?.data?.dietPlan) {
      // Transform keys from "week_1" to "Week_1", "week_2" to "Week_2", etc.
      const fetchedDietPlan = res.payload.data.dietPlan;
      const transformedDietPlan: any = {};
      Object.keys(fetchedDietPlan).forEach((key) => {
        // Capitalize the first letter of the key
        const newKey = key.charAt(0).toUpperCase() + key.slice(1);
        transformedDietPlan[newKey] = fetchedDietPlan[key];
      });
      setDietPlan(transformedDietPlan);
    }
    setIsLoader(false);
  };

  // Get the data for the currently selected week.
  const selectedWeekData = selectedCard
    ? dietPlan[`Week_${selectedCard}`]
    : null;

  // Handler to update a specific meal in the dietPlan state.
  const handleMealChange = (
    dayKey: string,
    mealSlot: string,
    index: number,
    newMeal: string,
  ) => {
    if (!selectedCard) return;
    const weekKey = `Week_${selectedCard}`;

    // Create a copy of the week data.
    const updatedWeek = { ...dietPlan[weekKey] };
    // Create a copy of the meal list for the specific day and meal slot.
    const updatedMealList = [...updatedWeek[dayKey][mealSlot]];

    // Update the meal at the specified index.
    updatedMealList[index] = newMeal;
    // Update the day with the new meal list.
    updatedWeek[dayKey] = {
      ...updatedWeek[dayKey],
      [mealSlot]: updatedMealList,
    };

    // Update the dietPlan state.
    setDietPlan({
      ...dietPlan,
      [weekKey]: updatedWeek,
    });
  };

  // Handler for enabling edit mode on a meal item.
  const handleEditClick = (mealKey: string) => {
    setEditing((prev) => ({ ...prev, [mealKey]: true }));
  };

  // Handler for saving an edited meal item.
  const handleSaveClick = (mealKey: string) => {
    setEditing((prev) => ({ ...prev, [mealKey]: false }));
  };

  // Handler for the update button.
  const handleUpdate = () => {
    console.log("Updated dietPlan:", dietPlan);
    addDietToBooking(dietPlan);
    // You can add further processing here (e.g., send to backend)
  };

  return (
    <BMICalculatorStyled>
      {isLoader && <Loader />}
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
      <div className="banner-div">
        <div className="img-div">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1737354499805.png"
            alt="Fruit"
          />
        </div>
        <div className="card-container">
          {cardData.map((card) => (
            <div key={card.id} className="card-div">
              <div
                className={`card ${selectedCard === card.id ? "selected" : ""}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-body">
                  <h4
                    style={{
                      color: selectedCard === card.id ? "#9747ff" : "black",
                    }}
                  >
                    {card.title}
                  </h4>
                  <div
                    className="sub-card"
                    style={{
                      color: selectedCard === card.id ? "#9747ff" : "black",
                      border:
                        selectedCard === card.id
                          ? "1px solid #9747ff"
                          : "1px solid #ccc",
                    }}
                  >
                    <h4
                      style={{
                        color: selectedCard === card.id ? "#9747ff" : "black",
                      }}
                    >
                      {card.number}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="list-div">
        {/* Render the dynamic content if a week is selected and data exists */}
        {selectedWeekData ? (
          Object.entries(selectedWeekData).map(([dayKey, mealTimes]: any) => (
            <div key={dayKey} className="weeks">
              <h4 className="day-div">{dayKey.replace("_", " ")}</h4>
              <div className="slot-div">
                {timeSlots.map((slot) => (
                  <div key={slot} className="timeSlot">
                    <h4 className="slot-title">{slot}</h4>
                    <ul>
                      {(mealTimes[slot] || []).map(
                        (meal: string, index: number) => {
                          // Create a unique key for the meal item.
                          const mealKey = `${dayKey}_${slot}_${index}`;
                          return (
                            <li key={mealKey} className="name-div">
                              {editing[mealKey] ? (
                                <>
                                  <input
                                    type="text"
                                    value={meal}
                                    onChange={(e) =>
                                      handleMealChange(
                                        dayKey,
                                        slot,
                                        index,
                                        e.target.value,
                                      )
                                    }
                                  />
                                  <FaCheck
                                    style={{
                                      cursor: "pointer",
                                      marginLeft: "8px",
                                      color: "green",
                                    }}
                                    onClick={() => handleSaveClick(mealKey)}
                                  />
                                </>
                              ) : (
                                <>
                                  <span>{meal}</span>
                                  <FaPencilAlt
                                    style={{
                                      cursor: "pointer",
                                      marginLeft: "8px",
                                      color: "#9747ff",
                                    }}
                                    onClick={() => handleEditClick(mealKey)}
                                  />
                                </>
                              )}
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Please select a week to view the diet plan.</p>
        )}

        <div className="btn-div">
          {selectedCard && (
            <>
              <button
                className="button"
                type="button"
                onClick={() => setShowDownloadModal(true)}
              >
                <span className="button__text">
                  Download Week {selectedCard}
                </span>
                <span className="button__icon">
                  <FaArrowDown className="svg" />
                </span>
              </button>
              <button
                className="button-with-icon"
                onClick={() => {
                  setOpenShareModel(true);
                }}
              >
                <FaShare className="icon" />
                <span className="text">Share</span>
              </button>
              {/* Update button to log the latest dietPlan */}
              <div className="update-btn-div">
                <Button className="update-button" onClick={handleUpdate}>
                  Update Diet Plan
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <DietPlanPreview
        showModal={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        selectedWeekData={selectedWeekData}
      />
    </BMICalculatorStyled>
  );
};

export default MealCategory;
