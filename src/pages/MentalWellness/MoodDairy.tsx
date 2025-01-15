import React from "react";
import { MoodDiaryStyled } from "./MoodDiary.Styled";
import { ReactComponent as Icon } from "../../assets/icons/awareness.svg";
import { ReactComponent as Icon1 } from "../../assets/icons/regulation.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/stress.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/mental.svg";

const MoodDairy = () => {
  return (
    <MoodDiaryStyled>
      <div className="Mood-diary">
        <div className="banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="banner-text">
                  <h1>
                    Unlock the Power of Emotional Awareness with Our Online<br/> <span>Mood
                    Diary</span>
                  </h1>
                  <div className="button-container mt-5">
                    <button className="trailbtn">Trail Mood Diary</button>
                    <button className="downloadbtn">Download App</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                {/* <img src={C_img} alt="Imag-sec" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="introduction">
          <div className="container-fluid">
            <div className="row">
              <h4>Introducing Mood Diary</h4>
            </div>
            <div className="row mt-4">
              <div className="col-md-2 text-center">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736506844367.png" alt="imagesmiley" />
              </div>
              <div className="col-md-10">
                <p>
                  <span className="About">At Raphacure,</span> we offer the Mood
                  Diary as your personal emotional compass. This powerful tool
                  helps you navigate the complex landscape of your feelings,
                  providing insight into your emotional patterns and triggers.
                  By regularly recording your moods, you can identify trends,
                  understand your emotional responses, and gain clarity on what
                  influences your mental well-being. Use your Mood Diary from
                  Raphacure to track changes, reflect on your experiences, and
                  make informed decisions about your mental health journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits">
          <div className="container-fluid">
            <div className="row">
              <h4>
                The Benefits of Regular Mood Tracking By consistently using our
                Mood Diary
              </h4>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3">
                <div className="card">
                  <Icon />
                  <h6>Self-Awareness</h6>
                  <p>
                    Tracking your emotions helps you become more aware of your
                    feelings and patterns, leading to better self-understanding.
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
                    A mood diary allows you to pinpoint stressors and understand
                    how they affect your mood, enabling better stress management
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
      </div>
    </MoodDiaryStyled>
  );
};

export default MoodDairy;
