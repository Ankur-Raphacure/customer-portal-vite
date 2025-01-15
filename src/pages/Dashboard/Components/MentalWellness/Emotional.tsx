import React, { useRef, useState } from "react";
import { ReactComponent as Icon } from "../../../../assets/icons/awareness.svg";
import { ReactComponent as Icon1 } from "../../../../assets/icons/regulation.svg";
import { ReactComponent as Icon2 } from "../../../../assets/icons/stress.svg";
import { ReactComponent as Icon3 } from "../../../../assets/icons/mental.svg";
import { ReactComponent as BadIcon } from "../../../../assets/icons/badmood.svg";
import { ReactComponent as BadIconTwo } from "../../../../assets/icons/bad_mood_two.svg";
import { ReactComponent as NotGoodIcon } from "../../../../assets/icons/Goodmood.svg";
import { ReactComponent as NotGoodIconTwo } from "../../../../assets/icons/not_good_mood_two.svg";
import { ReactComponent as OkayIcon } from "../../../../assets/icons/Okayicon.svg";
import { ReactComponent as OkayIconTwo } from "../../../../assets/icons/okay_good_mood_two.svg";
import { ReactComponent as GoodIcon } from "../../../../assets/icons/Goodicon.svg";
import { ReactComponent as GoodIconTwo } from "../../../../assets/icons/good_mood_two.svg";
import { ReactComponent as GreatIcon } from "../../../../assets/icons/Greaticon.svg";
import { ReactComponent as GreatIconTwo } from "../../../../assets/icons/great_mood_two.svg";
import { WellnessStyled } from "./Wellness.Styled";
import happyIcon from "../../../../assets/icons/happyone.svg";
import excitedIcon from "../../../../assets/icons/exited.svg";
import gratefulIcon from "../../../../assets/icons/gratefull.svg";
import relaxed from "../../../../assets/icons/relaxed.svg";
import content from "../../../../assets/icons/content.svg";
import tired from "../../../../assets/icons/tired.svg";
import unsure from "../../../../assets/icons/unsure.svg";
import bored from "../../../../assets/icons/bored.svg";
import anxious from "../../../../assets/icons/anxious.svg";
import angry from "../../../../assets/icons/angry.svg";
import stressed from "../../../../assets/icons/stressed.svg";
import sad from "../../../../assets/icons/sad.svg";
import desperate from "../../../../assets/icons/desperate.svg";
import desperatetwo from "../../../../assets/icons/desptwo.svg";
import goodSleep from "../../../../assets/icons/goodSleep.svg";
import MediumSleep from "../../../../assets/icons/mediumsleep.svg";
import BadSleep from "../../../../assets/icons/badSleep.svg";
import Water from "../../../../assets/icons/waterglass.svg";
import Exercise from "../../../../assets/icons/exer.svg";
import Walk from "../../../../assets/icons/walk.svg";
import family from "../../../../assets/icons/family.svg";
import friends from "../../../../assets/icons/friends.svg";
import party from "../../../../assets/icons/party.svg";
import fastfood from "../../../../assets/icons/fastfood.svg";
import homemade from "../../../../assets/icons/homemade.svg";
import rest from "../../../../assets/icons/rest.svg";
import meat from "../../../../assets/icons/meat.svg";
import sweet from "../../../../assets/icons/sweet.svg";
import PlystorePopUp from "../../../../components/AppDownloadPopUp/PlystorePopUp";

interface EmotionalProps {
  onBackClick: () => void;
}

const emotionsData = [
  { id: 1, label: "Happy", icon: happyIcon },
  { id: 2, label: "Excited", icon: excitedIcon },
  { id: 3, label: "Grateful", icon: gratefulIcon },
  { id: 4, label: "Relaxed", icon: relaxed },
  { id: 5, label: "Content", icon: content },
  { id: 6, label: "Tired", icon: tired },
  { id: 7, label: "Unsure", icon: unsure },
  { id: 8, label: "Bored", icon: bored },
  { id: 9, label: "Anxious", icon: anxious },
  { id: 10, label: "Angry", icon: angry },
  { id: 11, label: "Stressed", icon: stressed },
  { id: 12, label: "Sad", icon: sad },
  { id: 13, label: "Desperate", icon: desperate },
  { id: 14, label: "Desperate", icon: desperatetwo },
];

const sleepData = [
  { id: 15, label: "Good Sleep", icon: goodSleep },
  { id: 16, label: "Medium Sleep", icon: MediumSleep },
  { id: 17, label: "Bad Sleep", icon: BadSleep },
];

const healthData = [
  { id: 18, label: "Exercise", icon: Exercise },
  { id: 19, label: "Drink water", icon: Water },
  { id: 20, label: "Walk", icon: Walk },
];

const socialData = [
  { id: 21, label: "Family", icon: family },
  { id: 22, label: "Friends", icon: friends },
  { id: 23, label: "Party", icon: party },
];

const foodData = [
  { id: 24, label: "Fast food", icon: fastfood },
  { id: 25, label: "Home made", icon: homemade },
  { id: 26, label: "Restaurant", icon: rest },
  { id: 27, label: "No meat", icon: meat },
  { id: 28, label: "No Sweet", icon: sweet },
];

const Emotional: React.FC<EmotionalProps> = ({ onBackClick }) => {
  const dayTabsRef = useRef<any>(null);
  const [selectedDay, setSelectedDay] = useState<string>("Day 1");
  const [currentIconIndex, setCurrentIconIndex] = useState<number | null>(null);
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const [modalShow, setModalShow] = React.useState(false);

  const initialEmotions: { [key: string]: JSX.Element[] } = {
    "Day 1": [
      <BadIcon />,
      <NotGoodIcon />,
      <OkayIcon />,
      <GoodIcon />,
      <GreatIcon />,
    ],
    "Day 2": [
      <GreatIcon />,
      <GoodIcon />,
      <OkayIcon />,
      <NotGoodIcon />,
      <BadIcon />,
    ],
    "Day 3": [
      <OkayIcon />,
      <GoodIcon />,
      <NotGoodIcon />,
      <BadIcon />,
      <GreatIcon />,
    ],
    "Day 4": [
      <GoodIcon />,
      <NotGoodIcon />,
      <OkayIcon />,
      <GreatIcon />,
      <BadIcon />,
    ],
    "Day 5": [
      <NotGoodIcon />,
      <OkayIcon />,
      <GoodIcon />,
      <BadIcon />,
      <GreatIcon />,
    ],
    "Day 6": [
      <BadIcon />,
      <GreatIcon />,
      <GoodIcon />,
      <OkayIcon />,
      <NotGoodIcon />,
    ],
    "Day 7": [
      <GreatIcon />,
      <BadIcon />,
      <GoodIcon />,
      <NotGoodIcon />,
      <OkayIcon />,
    ],
  };

  const [emotions, setEmotions] = useState(initialEmotions);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    setCurrentIconIndex(null);
    setActiveIcon(null);
  };

  const handleIconClick = (index: any) => {
    setCurrentIconIndex(index);
    setActiveIcon(index);
    setActiveIcon(index);
    setCurrentIconIndex(index);
    setSelectedDay(index);
  };

  const handleTrailMoodDiaryClick = () => {
    if (dayTabsRef.current) {
      dayTabsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WellnessStyled>
      <div className="emotion">
        {/* <button onClick={onBackClick}>Back</button> */}
        <div className="Mood-diary">
          <div className="banner">
            <div className="container-fluid">
              <div className="row">
                <div className="banner-text">
                  <h1>
                    Unlock the Power of Emotional Awareness with Our Online
                    <br /> <span>Mood Diary</span>
                  </h1>
                  <div className="button-container mt-5">
                    <button
                      className="trailbtn"
                      onClick={handleTrailMoodDiaryClick}
                    >
                      Trail Mood Diary
                    </button>
                    <button
                      className="downloadbtn"
                      onClick={() => setModalShow(true)}
                    >
                      Download App
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PlystorePopUp show={modalShow} onHide={() => setModalShow(false)} />

          <div className="introduction">
            <div className="container-fluid">
              <div className="row">
                <h4>Introducing Mood Diary</h4>
              </div>
              <div className="row mt-4">
                <div className="col-md-2 text-center">
                  <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736508785628.png" alt="imagesmiley" />
                </div>
                <div className="col-md-10">
                  <p>
                    <span className="About">At Raphacure,</span> we offer the
                    Mood Diary as your personal emotional compass. This powerful
                    tool helps you navigate the complex landscape of your
                    feelings, providing insight into your emotional patterns and
                    triggers. By regularly recording your moods, you can
                    identify trends, understand your emotional responses, and
                    gain clarity on what influences your mental well-being. Use
                    your Mood Diary from Raphacure to track changes, reflect on
                    your experiences, and make informed decisions about your
                    mental health journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits">
            <div className="container-fluid">
              <div className="row">
                <h4>
                  The Benefits of Regular Mood Tracking By consistently using
                  our Mood Diary
                </h4>
              </div>
              <div className="row mt-5">
                <div className="col-lg-3">
                  <div className="card">
                    <Icon />
                    <h6>Self-Awareness</h6>
                    <p>
                      Tracking your emotions helps you become more aware of your
                      feelings and patterns, leading to better
                      self-understanding.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <Icon1 />
                    <h6>Emotional Regulation</h6>
                    <p>
                      Regularly recording your moods can help you identify
                      triggers and develop strategies for managing your emotions
                      effectively
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <Icon2 />
                    <h6>Stress Management</h6>
                    <p>
                      A mood diary allows you to pinpoint stressors and
                      understand how they affect your mood, enabling better
                      stress management
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <Icon3 />
                    <h6>Improved Mental Health</h6>
                    <p>
                      By reflecting on your emotional patterns, you can make
                      informed decisions that contribute to better mental
                      well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="how-do-feel">
            <div className="day-tabs" ref={dayTabsRef}>
              {[
                "Day 1",
                "Day 2",
                "Day 3",
                "Day 4",
                "Day 5",
                "Day 6",
                "Day 7",
              ].map((day) => (
                <div
                  key={day}
                  className={`day-tab ${selectedDay === day ? "active" : ""}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="feelings-section">
              <h2>How do you feel today</h2>
              <div className="emotions">
                {emotions[selectedDay]?.map((IconComponent, index) => (
                  <div
                    key={index}
                    className="emotion"
                    onClick={() => handleIconClick(index)}
                  >
                    {activeIcon === index ? (
                      index === 0 ? (
                        <BadIconTwo />
                      ) : index === 1 ? (
                        <NotGoodIconTwo />
                      ) : index === 2 ? (
                        <OkayIconTwo />
                      ) : index === 3 ? (
                        <GoodIconTwo />
                      ) : index === 4 ? (
                        <GreatIconTwo />
                      ) : (
                        IconComponent
                      )
                    ) : (
                      IconComponent
                    )}
                    <p>{["Bad", "Not Good", "Okay", "Good", "Great"][index]}</p>
                  </div>
                ))}
              </div>
              {currentIconIndex !== null && (
                <div className="additional-icons">
                  <p>
                    You clicked on:{" "}
                    {
                      ["Bad", "Not Good", "Okay", "Good", "Great"][
                        currentIconIndex
                      ]
                    }
                  </p>
                  {/* Add any additional content or icons to display based on the clicked icon */}
                </div>
              )}
            </div>
          </div>

          <div className="emotions-container">
            <div className="emotions-row">
              <h4>Emotions</h4>
            </div>
            <div className="emotions-row emotion-css">
              {emotionsData?.map((emotion: any) => (
                <div
                  key={emotion.id}
                  className={`emotions-icon ${
                    selectedEmotion === emotion?.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedEmotion(emotion?.id)}
                >
                  <div className="icon">
                    <img src={emotion.icon} alt={emotion.label} />
                  </div>
                  <p>{emotion?.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="emotions-container">
            <div className="emotions-row">
              <h4>Sleep</h4>
            </div>
            <div className="emotions-row emotion-css">
              {sleepData?.map((emotion: any) => (
                <div
                  key={emotion?.id}
                  className={`emotions-icon ${
                    selectedEmotion === emotion?.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedEmotion(emotion?.id)}
                >
                  <div className="icon">
                    <img src={emotion?.icon} alt={emotion?.label} />
                  </div>
                  <p>{emotion?.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="emotions-container">
            <div className="emotions-row">
              <h4>Health</h4>
            </div>
            <div className="emotions-row emotion-css">
              {healthData.map((emotion: any) => (
                <div
                  key={emotion.id}
                  className={`emotions-icon ${
                    selectedEmotion === emotion?.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedEmotion(emotion?.id)}
                >
                  <div className="icon">
                    <img src={emotion.icon} alt={emotion.label} />
                  </div>
                  <p>{emotion?.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="emotions-container">
            <div className="emotions-row">
              <h4>Social</h4>
            </div>
            <div className="emotions-row emotion-css">
              {socialData.map((emotion: any) => (
                <div
                  key={emotion.id}
                  className={`emotions-icon ${
                    selectedEmotion === emotion?.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedEmotion(emotion?.id)}
                >
                  <div className="icon">
                    <img src={emotion.icon} alt={emotion.label} />
                  </div>
                  <p>{emotion?.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="emotions-container">
            <div className="emotions-row">
              <h4>Food</h4>
            </div>
            <div className="emotions-row emotion-css">
              {foodData.map((emotion: any) => (
                <div
                  key={emotion.id}
                  className={`emotions-icon ${
                    selectedEmotion === emotion?.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedEmotion(emotion?.id)}
                >
                  <div className="icon">
                    <img src={emotion.icon} alt={emotion.label} />
                  </div>
                  <p>{emotion?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WellnessStyled>
  );
};

export default Emotional;
