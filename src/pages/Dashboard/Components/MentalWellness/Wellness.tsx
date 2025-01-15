import React, { useState } from "react";
import { WellnessStyled } from "./Wellness.Styled";
import Emotional from "./Emotional";
import MindGames from "./MindGames/MindGames";
import MindfulActivities from "./MindfulActivities/MindfulActivities";
import SerenityScenes from "./SerenityScenes/SerenityScenes";
import ChatRoom from "../../../ChatRoom/ChatRoom";
import { useHistory } from "react-router-dom";

// Card data
const cardData = [
  {
    id: 1,
    title: "Interactive Mind Games",
    description:
      "Cognitive games that challenge and stimulate the mind, helping improve mental agility and emotional balance.",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507934910.png",
    component: "MindGames", // Store the component's name
  },
  {
    id: 2,
    title: "Mindful Activities",
    description:
      "Engaging mental exercises designed to enhance focus, reduce stress, and promote inner calm.",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507664059.png",
    component: "MindfulActivities", // Store the component's name
  },
  {
    id: 3,
    title: "Serenity Scenes",
    description:
      "Peaceful visuals and sounds that help create a tranquil mental space, perfect for relaxation and reflection.",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507712296.png",
    component: "SerenityScenes", // Store the component's name
  },
  {
    id: 4,
    title: "Community Chat",
    description:
      "A supportive chat platform to connect, share experiences, and discuss mental wellness.",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507801035.png",
    component: "ChatRoom", // Store the component's name
  },
];

// Component map
const componentMap = {
  Emotional: Emotional,
  MindGames: MindGames,
  MindfulActivities: MindfulActivities,
  SerenityScenes: SerenityScenes,
  ChatRoom: ChatRoom,
} as any;

const Wellness = () => {
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const history = useHistory();
  // Function to handle button click
  const handleStartNowClick = (card: any) => {
    console.log("card : ", card);
    setSelectedComponent(card.component); // Store the component's name in the state
  };

  // Function to go back to the Wellness component
  const handleBackClick = () => {
    setSelectedComponent(null); // Reset to show the default wellness view
  };

  // Function to render the selected component
  const renderComponent = () => {
    if (selectedComponent) {
      if (selectedComponent === "ChatRoom") {
        history.push("/chat");
        return;
      }
      const Component = componentMap[selectedComponent]; // Get the component from the map
      return <Component onBackClick={handleBackClick} />;
    }
    return null;
  };

  const [selected, setSelected] = useState(0);

  const items = [
    {
      id: 0,
      title: "Interactive Mind Games",
      icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507934910.png",
      component: "MindGames",
    },
    {
      id: 1,
      title: "Mindful Activities",
      icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507664059.png",
      component: "MindfulActivities",
    },
    {
      id: 2,
      title: "Serenity Scenes",
      icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507712296.png",
      component: "SerenityScenes",
    },
    { id: 3, title: "Community Chat", icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507801035.png", component: "ChatRoom" },
  ];

  return (
    <WellnessStyled>
      {!selectedComponent ? (
        <div className="wellness">
          <div className="discover-sec">
            <div className="container-fluid">
              <div className="row mb-3">
                <h2>Discover Wellness Areas</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736508005403.png" alt="Imag-sec" />
                </div>
                <div className="col-lg-8 col-md-8">
                  <h4>Mood Diary</h4>
                  <p>
                    A Mood Diary is an insightful tool designed to track and
                    record an individual’s moods and emotions over time,
                    offering a deeper understanding of their emotional
                    well-being. By maintaining this diary, individuals can
                    monitor their emotional states regularly, allowing them to
                    identify patterns, triggers, and correlations between their
                    moods and various aspects of their lives, such as daily
                    activities, thoughts, physical health, sleep, and external
                    circumstances.
                  </p>
                </div>
              </div>
              <div className="row">
                <p>
                  This practice not only fosters self-awareness but also
                  empowers individuals to take proactive steps in managing their
                  mental health, leading to improved emotional resilience and
                  overall well-being.
                </p>

                <p>
                  At Raphacure, our Mood Diary service is tailored to support
                  you in your journey toward better mental health, helping you
                  recognize and respond to your emotional needs with greater
                  clarity and confidence.
                </p>

                <button
                  className="startbtn"
                  onClick={() =>
                    handleStartNowClick({ component: "Emotional" })
                  }
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>

          <div className="made-easy">
            <div className="container-fluid">
              <div className="row">
                <h2 className="mb-5 mt-5">Mental Wellness Made Easy Here</h2>
                {cardData.map((card) => (
                  <div key={card.id} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                      <div className="circle-icon">
                        <img src={card.image} alt={card.title} />
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <button
                        className="start-button"
                        onClick={() => handleStartNowClick(card)}
                      >
                        Start Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Render the selected component dynamically */}
          <span
            onClick={handleBackClick}
            className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                fill="#444444"
              />
            </svg>{" "}
            &nbsp;
            {` Back`}
          </span>
          <div className="card-container gamesCard">
            {items.map((item) => (
              <div
                key={item?.id}
                className={`card ${selected === item?.id ? "active" : ""}`}
                onClick={() => setSelectedComponent(item?.component)}
              >
                <div className="icon">
                  <img src={item?.icon} alt="" />
                </div>
                <div className="title">{item?.title}</div>
              </div>
            ))}
          </div>
          {renderComponent()}
        </div>
      )}
    </WellnessStyled>
  );
};

export default Wellness;
