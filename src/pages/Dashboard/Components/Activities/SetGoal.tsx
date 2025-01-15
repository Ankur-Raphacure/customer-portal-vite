import React, { useState } from "react";
import { Modal, Button } from "antd";
import { CareStyled } from "./CareStyled.Styled";
import Steps from "../../../../assets/images/steps.png";
import MoodDiary from "../../../../assets/images/MoodDiary.png";
import Workout from "../../../../assets/images/workout.png";
import Water from "../../../../assets/images/water.png";
import Cycling from "../../../../assets/images/cycling.png";
import Habits from "../../../../assets/images/Habits.png";
import { Image } from "react-bootstrap";
import { ReactComponent as Sad } from "../../../../assets/icons/bad_mood.svg";
import { ReactComponent as Sad1 } from "../../../../assets/icons/sad1_img.svg";
import { ReactComponent as Sad2 } from "../../../../assets/icons/sad2_img.svg";
import { ReactComponent as Sad3 } from "../../../../assets/icons/sad3_img.svg";
import { ReactComponent as Sad4 } from "../../../../assets/icons/sad4_img.svg";
import { ReactComponent as Sad5 } from "../../../../assets/icons/sad5_img.svg";
import { ReactComponent as Not_Good } from "../../../../assets/icons/Not Good mood e.svg";
import { ReactComponent as Okay_good } from "../../../../assets/icons/Okay good mood e.svg";
import { ReactComponent as Good } from "../../../../assets/icons/Good.svg";
import { ReactComponent as Great } from "../../../../assets/icons/Great.svg";
import { ReactComponent as Fast_food } from "../../../../assets/icons/fast food.svg";
import { ReactComponent as Home } from "../../../../assets/icons/home.svg";
import { ReactComponent as Resto } from "../../../../assets/icons/resto.svg";
import { ReactComponent as No_me } from "../../../../assets/icons/no me.svg";
import { ReactComponent as Food1_img } from "../../../../assets/icons/food1_img.svg";
import { ReactComponent as Food2_img } from "../../../../assets/icons/food2_img.svg";
import { ReactComponent as Food3_img } from "../../../../assets/icons/food3_img.svg";
import { ReactComponent as Food4_img } from "../../../../assets/icons/food4_img.svg";
import { ReactComponent as Food5_img } from "../../../../assets/icons/food5_img.svg";
import { ReactComponent as No_swe } from "../../../../assets/icons/no swe.svg";
import { ReactComponent as Good_sleep } from "../../../../assets/icons/Good sleep.svg";
import { ReactComponent as Medium_sleep } from "../../../../assets/icons/Medium sleep.svg";
import { ReactComponent as Bad_sleep } from "../../../../assets/icons/Bad sleep.svg";
import { ReactComponent as Mood1_img } from "../../../../assets/icons/Mood1_img.svg";
import { ReactComponent as Mood2_img } from "../../../../assets/icons/Mood2_img.svg";
import { ReactComponent as Mood3_img } from "../../../../assets/icons/Mood3_img.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getUpdateUserActivityAPI,
  getuserActivityAPI,
} from "../../../../redux/slices/generic/genericService";
import alko_img from "../../../../assets/images/dashboard/alko_img.png";
import cnform_img from "../../../../assets/images/dashboard/cnform_img.png";
import emoji_img from "../../../../assets/images/dashboard/emoji.png";
import hlp_img from "../../../../assets/images/dashboard/hlp_img.png";
import slp_img from "../../../../assets/images/dashboard/slp_img.png";
import Loader from "../../../../components/Loader/Loader";

const Checkitems = [{ name: "Liquor" }, { name: "Cigarette" }];
const MoodIcons = [
  { components: Sad1, component: Sad, alt: "Sad", value: 1 },
  { components: Sad4, component: Not_Good, alt: "Not Good", value: 2 },
  { components: Sad3, component: Okay_good, alt: "Okay Good", value: 3 },
  { components: Sad5, component: Good, alt: "Good", value: 4 },
  { components: Sad2, component: Great, alt: "Great", value: 5 },
];
const FoodIcons = [
  { components: Food1_img, Component: Fast_food, names: "Fast Food", value: 1 },
  { components: Food2_img, Component: Home, names: "Home", value: 2 },
  { components: Food3_img, Component: Resto, names: "Restaurant", value: 3 },
  { components: Food4_img, Component: No_me, names: "No Meat", value: 4 },
  { components: Food5_img, Component: No_swe, names: "No Sweet", value: 5 },
];
const sleepIcons = [
  {
    id: "good",
    components: Mood1_img,
    Component: Good_sleep,
    label: "Good Sleep",
    value: 1,
  },
  {
    id: "medium",
    components: Mood2_img,
    Component: Medium_sleep,
    label: "Medium Sleep",
    value: 2,
  },
  {
    id: "bad",
    components: Mood3_img,
    Component: Bad_sleep,
    label: "Bad Sleep",
    value: 3,
  },
];

const unitMapping: { [key: string]: string } = {
  cigarette: "cigarettes",
  liquor: "milliliters",
};

const SetGoal = ({ visible, onCancel, onAdd, goal, setCurrentGoal }: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [steps, setSteps] = useState<any>(0);
  const [workout, setWorkout] = useState("");
  const [cycling, setCycling] = useState(0);
  const [water, setWater] = useState("");
  const [liquor, setLiquor] = useState<any>(0);
  const [cigarette, setCigarette] = useState<any>(0);

  const [selectedItems, setSelectedItems] = useState<any>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [conformVisible, setConformVisible] = useState(false);
  const [conformTrackVisible, setConformTrackVisible] = useState(false);
  const [conformMoodDiaryVisible, setConformMoodDiaryVisible] = useState(false);
  const [habits, setHabits] = useState<any>({
    cigarette: 0,
    drinks: 0,
    sugar: 0,
  });
  const [hourSleep, setHourSleep] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedSleep, setSelectedSleep] = useState(null);
  console.log(selectedSleep, "selectedSleep");

  const handleIconClick = (alt: any) => {
    setSelectedMood(alt);
  };
  const handleFoodIconClick = (names: any) => {
    setSelectedFood(names);
  };
  const handleSleepIconSelect = (value: any) => {
    setSelectedSleep(value); // Update the state with the selected item value
  };

  const makeSignUpCall = async (periodData: any) => {
    const resp = await dispatch(getuserActivityAPI(periodData));
    const resJson = JSON.parse(JSON.stringify(resp));
    console.log("resJson : ", resJson);
    if (resJson?.payload?.activityId?.id) {
      setConformVisible(true);
      setIsLoading(false);
    }
  };
  const handleStepAdd = async () => {
    const activityBody = {
      activity_category_id: goal?.id,
      name: goal?.activity_name,
      unit: goal?.activities?.unit,
      goal_quantity: steps,
    };
    await makeSignUpCall(activityBody);
  };
  const handleWorkoutAdd = async () => {
    const activityBody = {
      activity_category_id: goal?.id,
      name: goal?.activity_name,
      unit: goal?.activities?.unit,
      goal_quantity: workout,
    };
    await makeSignUpCall(activityBody);
  };
  const handleWaterAdd = async () => {
    const activityBody = {
      activity_category_id: goal?.id,
      name: goal?.activity_name,
      unit: goal?.activities?.unit,
      goal_quantity: water,
    };
    await makeSignUpCall(activityBody);
  };
  const handleMoodAdd = async () => {
    const activityBody = {
      activity_category_id: goal?.id,
      name: goal?.activity_name,
      moodData: {
        feeling: selectedMood,
        food_type: selectedFood,
        sleep_quality: selectedSleep,
        hours_slept: hourSleep,
      },
    };
    await makeSignUpCall(activityBody);
    setConformMoodDiaryVisible(true);
  };
  const handleSaveTrack = async () => {
    const habitData = [
      {
        name: selectedItems === "Liquor" ? "liquor" : "cigarette",
        unit: unitMapping[selectedItems === "Liquor" ? "liquor" : "cigarette"],
        quantity: selectedItems === "Liquor" ? liquor : cigarette,
      },
    ];

    const activityBody = {
      activity_category_id: goal?.id,
      name: goal?.activity_name,
      habitData,
    };

    await makeSignUpCall(activityBody);
    setConformTrackVisible(true);
  };
  const handleCyclingAdd = async () => {
    const activityBody = {
      activity_category_id: goal?.id,
      name: goal?.activity_name,
      unit: goal?.activities?.unit,
      goal_quantity: cycling,
    };
    await makeSignUpCall(activityBody);
  };
  const increaseSteps = (habit: any) => {
    setSteps((prevSteps: any) => prevSteps + 1);
    setCigarette((prevSteps: any) => prevSteps + 1);
    setLiquor((prevSteps: any) => prevSteps + 1);
  };
  const decreaseSteps = (habit: any) => {
    setSteps((prevSteps: any) => (prevSteps - 1 >= 0 ? prevSteps - 1 : 0));
    setCigarette((prevSteps: any) => (prevSteps - 1 >= 0 ? prevSteps - 1 : 0));
    setLiquor((prevSteps: any) => (prevSteps - 1 >= 0 ? prevSteps - 1 : 0));
  };
  const handleCheckboxChange = (item: any) => {
    setSelectedItems((prevSelectedItem: any) =>
      prevSelectedItem === item ? "" : item
    );
  };
  const handleHabitChange = (e: any, habit: string) => {
    setHabits({ ...habits, [habit]: e.target.value });
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setConformVisible(false);
  };
  const handleConformOk = () => {
    if (onCancel) {
      onCancel();
    }
    setConformVisible(false);
    setIsModalVisible(false);
    setConformTrackVisible(false);
    setConformMoodDiaryVisible(false);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      {isLoading && <Loader />}
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        className="update-modal"
      >
        <CareStyled>
          {goal?.activity_name === "Daily_steps" && (
            <div className="modal-content activity-header-text border-bottom-0">
              <div className="goal-head">
                <Image src={goal?.image ? goal?.image : Steps} />
                <h3 className="goal-title">{goal?.activity_name}</h3>
              </div>
              <div className="goal-head-steps">
                <p>Daily Goal 8000 Steps</p>
              </div>
              <div className="StepContainer">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={steps}
                    onChange={(e: any) => {
                      setSteps(e.target.value);
                      setCurrentGoal(e.target.value);
                    }}
                    placeholder="Set Steps"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} steps`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleStepAdd}
                  className="btn btn-outline send-btn"
                >
                  Set Goal
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Workout" && (
            <div className="modal-content activity-header-text border-bottom-0">
              <div className="goal-head">
                <Image src={goal?.image ? goal?.image : MoodDiary} />

                <h3 className="goal-title">{goal?.activity_name}</h3>
              </div>
              <div className="StepContainer mt-4">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={workout}
                    onChange={(e: any) => setWorkout(e.target.value)}
                    placeholder="Set Time"
                  />
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} Min`}</p>
                </div>
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleWorkoutAdd}
                  className="btn btn-outline send-btn"
                >
                  Set Goal
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Cycling" && (
            <div className="modal-content activity-header-text border-bottom-0">
              <div className="goal-head">
                <Image src={goal?.image ? goal?.image : Cycling} />
                <h3 className="goal-title">{goal?.activity_name}</h3>
              </div>
              <div className="StepContainer mt-4">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={cycling}
                    onChange={(e: any) => setCycling(e.target.value)}
                    placeholder="Daily Minutes"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} Min`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleCyclingAdd}
                  className="btn btn-outline send-btn"
                >
                  Set Goal
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Water" && (
            <div className="modal-content activity-header-text border-bottom-0">
              <div className="goal-head">
                <Image src={goal?.image ? goal?.image : Water} />
                <h3 className="goal-title">{goal?.activity_name}</h3>
              </div>
              <div className="StepContainer mt-4">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={water}
                    onChange={(e: any) => setWater(e.target.value)}
                    placeholder="Litter"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} L`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
              <div className="modal-footer">
                <Button
                  type="primary"
                  onClick={handleWaterAdd}
                  className="btn btn-outline send-btn"
                >
                  Set Goal
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Mood" && (
            <div className="modal-content activity-header-text border-bottom-0">
              <div className="goal-head">
                <Image src={goal?.image ? goal?.image : MoodDiary} />
                <h3 className="goal-title">{`${goal?.activity_name}`}</h3>
              </div>
              <div>
                <div className="goal-head-steps">
                  <p>How do you feel today</p>
                </div>

                <div className="feel-icon-div">
                  {MoodIcons?.map((item, index) => {
                    const SvgIcon = item.component;
                    const SadSvgIcon = item.components;

                    return (
                      <div key={index} className="feel-icon-text-div mt-3">
                        <label className="container">
                          <input
                            type="checkbox"
                            onChange={() => handleIconClick(item.value)} // Pass the numeric value
                            checked={selectedMood === item.value} // Check against the numeric value
                          />
                          <SvgIcon
                            aria-label={item.alt}
                            className="thumbs-up-regular"
                            onClick={() => handleIconClick(item.value)} // Pass the numeric value
                          />
                          <SadSvgIcon
                            aria-label={item.alt}
                            className="thumbs-up-solid"
                            onClick={() => handleIconClick(item.value)} // Pass the numeric value
                          />
                        </label>
                        <p className="mt-3">{item.alt}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="text-center hr1-line-div">
                  <hr className=" mx-auto" />
                </div>
                <div className="feel-icon-div">
                  {FoodIcons.map((item, index) => {
                    const SvgIcon = item.Component;
                    const SadSvgIcon = item.components;

                    return (
                      <div key={index} className="feel-icon-text-div mt-3">
                        <label className="container">
                          <input
                            type="radio"
                            name="foodIcon"
                            onChange={() => handleFoodIconClick(item.value)}
                            checked={selectedFood === item.value}
                          />
                          <SvgIcon
                            aria-label={item.names}
                            className="thumbs-up-regular"
                            onClick={() => handleFoodIconClick(item.value)}
                          />
                          <SadSvgIcon
                            aria-label={item.names}
                            className="thumbs-up-solid"
                            onClick={() => handleFoodIconClick(item.value)}
                          />
                        </label>
                        <p className="mt-3">{item.names}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="text-center hr2-line-div">
                  <hr className=" mx-auto" />
                </div>
                <div className="feel-icon-div">
                  {sleepIcons?.map((item, index) => {
                    const SvgIcon = item.Component;
                    const SadSvgIcon = item.components;

                    return (
                      <div key={index} className="feel-icon-text-div mt-2">
                        <label className="container">
                          <input
                            type="checkbox"
                            onChange={() => handleSleepIconSelect(item.value)}
                            checked={selectedSleep === item.value} // Check if the selected item is the current one
                          />
                          <SvgIcon
                            aria-label={item.label}
                            className="thumbs-up-regular"
                            onClick={() => handleSleepIconSelect(item.value)}
                          />
                          <SadSvgIcon
                            aria-label={item.label}
                            className="thumbs-up-solid"
                            onClick={() => handleSleepIconSelect(item.value)}
                          />
                        </label>
                        <p className="mt-3">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="StepContainer mt-1 mb-3">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={hourSleep}
                    onChange={(e: any) => setHourSleep(e.target.value)}
                    placeholder="Daily Minutes"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} hrs`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
              <div className="next-modal-footer">
                <Button
                  type="primary"
                  onClick={handleMoodAdd}
                  className="btn btn-outline send-btn"
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
          {goal?.activity_name === "Habit" && (
            <div className="modal-content activity-header-text border-bottom-0">
              <div className="goal-head">
                <Image src={goal?.image ? goal?.image : Habits} />
                <h3 className="goal-title">{`${goal?.activity_name}`}</h3>
              </div>
              <div>
                <div className="goal-head-steps">
                  <p>{`Select your ${goal?.title}`}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="row main-row-box-div">
                  {Checkitems?.map((item: any, index: any) => (
                    <div key={index} className=" mb-3 row-box-div">
                      <div className="check-box-content-div d-flex align-items-center">
                        <label className="checkBox">
                          <input
                            id={`ch1-${index}`}
                            type="checkbox"
                            checked={selectedItems.includes(item.name)}
                            onChange={() => handleCheckboxChange(item.name)}
                          />
                          <div className="transition"></div>
                        </label>
                        <div className=" check-box-select-div">
                          <h5>{item.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="next-modal-footer">
                <Button
                  type="primary"
                  onClick={showModal}
                  className="btn btn-outline send-btn"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CareStyled>
      </Modal>
      <Modal
        visible={isModalVisible}
        onCancel={handleOk}
        footer={null}
        className="update-modal"
      >
        {/* <CareStyled>
          <div className="modal-content activity-header-text border-bottom-0">
            <div className="goal-head">
              <Image src={Habits} />
              <h3 className="goal-title">{goal?.activity_name}</h3>
            </div>

            {selectedItems === "Liquor" ? (
              <div className="StepContainer mt-3">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={steps}
                    onChange={(e: any) => {
                      setLiquor(e.target.value);
                    }}
                    placeholder="Today Drinks"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} steps`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
            ) : (
              <div className="StepContainer mt-3">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={steps}
                    onChange={(e: any) => {
                      setCigarette(e.target.value);
                    }}
                    placeholder="Today Cigarette"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${steps} steps`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
            )}

            <div className="modal-footer">
              <Button
                type="primary"
                onClick={handleSaveTrack}
                className="btn btn-outline send-btn"
              >
                Start Track
              </Button>
            </div>
          </div>
        </CareStyled> */}

        <CareStyled>
          <div className="modal-content activity-header-text border-bottom-0">
            <div className="goal-head">
              <Image src={Habits} />
              <h3 className="goal-title">{goal?.activity_name}</h3>
            </div>

            {selectedItems === "Liquor" ? (
              <div className="StepContainer mt-3">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={liquor}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLiquor(e.target.value)
                    }
                    placeholder="Today Drinks"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${liquor} ml`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
            ) : (
              <div className="StepContainer mt-3">
                <div className="StepTitle">
                  <input
                    className="StepInput"
                    type="text"
                    value={cigarette}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCigarette(e.target.value)
                    }
                    placeholder="Today Cigarettes"
                  />
                </div>
                <div className="StepButton" onClick={decreaseSteps}>
                  -
                </div>
                <div className="count-steps-div">
                  <p>{`${cigarette} No.`}</p>
                </div>
                <div className="StepButton" onClick={increaseSteps}>
                  +
                </div>
              </div>
            )}

            <div className="modal-footer">
              <Button
                type="primary"
                onClick={handleSaveTrack}
                className="btn btn-outline send-btn"
              >
                Start Track
              </Button>
            </div>
          </div>
        </CareStyled>
      </Modal>
      {/* Habits POPUP Div */}
      <Modal
        visible={conformTrackVisible}
        onCancel={handleConformOk}
        footer={null}
        className="update-modal"
      >
        <CareStyled>
          <div className="modal-content activity-header-text border-bottom-0">
            <div className="conform-image-div mt-5">
              <img src={cnform_img} alt="" />
            </div>
            <div className="goal-head mt-4 conform-goal-title">
              <h3>{`${goal?.title} Track Successful.`}</h3>
            </div>

            <div className="set-goal-warning-msg-div">
              <img src={alko_img} alt="" className="me-3" />
              <h4>Smoking and alcohol shorten your life. </h4>
            </div>

            <div className="modal-footer">
              <Button
                type="primary"
                onClick={handleConformOk}
                className="btn btn-outline send-btn"
              >
                Ok
              </Button>
            </div>
          </div>
        </CareStyled>
      </Modal>
      {/* MoodDiary POPUP Div */}
      <Modal
        visible={conformMoodDiaryVisible}
        onCancel={handleConformOk}
        footer={null}
        className="update-modal"
      >
        <CareStyled>
          <div className="modal-content activity-header-text border-bottom-0">
            <div className="conform-text-div">
              <h6>Today Mood</h6>
            </div>
            <div className="conform-image-div mt-2">
              <img src={emoji_img} alt="" />
            </div>
            <div className="goal-head mt-2 conform-mood-goal-title">
              <h3>Great</h3>
            </div>
            <div className="conform-mood-goal-bottom">
              <h4 className="me-5">
                <img src={slp_img} alt="" className="me-2" />
                Good sleep
              </h4>
              <h4>
                {" "}
                <img src={hlp_img} alt="" className="me-2" />
                Healthy food
              </h4>
            </div>

            <div className="modal-footer">
              <Button
                type="primary"
                onClick={handleConformOk}
                className="btn btn-outline send-btn"
              >
                Ok
              </Button>
            </div>
          </div>
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
              <h3>{`${goal?.title} Set Successful.`}</h3>
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

export default SetGoal;
