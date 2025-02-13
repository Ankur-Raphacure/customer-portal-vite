import React, { useState } from "react";
import { AdhdStyled } from "./Adhd.Styled";
import { useHistory } from "react-router-dom";

const Bipolar = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [testComplete, setTestComplete] = useState(false);

  const history = useHistory();

  const handleBackClick = () => {
    history.push("/mentalwellness");
  };

  const questions = [
    {
      question:
        "Over the last 2 weeks, how often have you felt unusually irritable or agitated?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how frequently have you experienced periods of feeling unusually high or euphoric?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how often have you had trouble concentrating or making decisions during mood episodes?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how frequently have you engaged in risky behaviors, such as spending sprees or impulsive decisions, during mood changes?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how often have you felt excessively energetic or restless?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how frequently have you had trouble sleeping or experienced changes in sleep patterns?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how frequently have you felt that your mood swings interfere with your daily life or relationships?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how often have you experienced periods of feeling hopeless or down?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
    {
      question:
        "Over the last 2 weeks, how frequently have you noticed changes in appetite or weight during mood changes?",
      options: [
        "Not at all",
        "Several days",
        "More then half the days",
        "Nearly every day",
      ],
    },
  ];

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setTestComplete(true);
    }
  };

  return (
    <AdhdStyled>
      <div className="adhd">
        <div className="container-fluid">
          <div className="row">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
          </div>
          <div className="row text-center">
            {!testComplete ? (
              <>
                <h2>Assess Your Focus</h2>
                <h4>Bipolar Self-Test</h4>
                <p>
                  Please answer the questions below, rating yourself on each of
                  the criteria shown. As you answer each question, select the
                  button that best describes how you have felt and conducted
                  yourself over the past 6 months.
                </p>
              </>
            ) : (
              <>
                <h2>Your Results</h2>
                <h4>Bipolar Self-Test</h4>
              </>
            )}
          </div>

          <div className="row">
            <div className="test">
              {!testComplete ? (
                <>
                  <h5>{questions[currentQuestion].question}</h5>
                  <div className="options">
                    {questions[currentQuestion].options.map((option, index) => (
                      <label key={index}>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedOption === option}
                          onChange={handleOptionChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  <div className="next-btn-container">
                    <button
                      className={`next-btn ${selectedOption ? "enabled" : ""}`}
                      onClick={handleNextClick}
                      disabled={!selectedOption} // Disable the button if no option is selected
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <div className="result-screen">
                  <p className="score">
                    Overall Score: <b>3/6</b>, Inattention: <b>4/9</b>,
                    Hyperactivity/Impulsivity: <b>4/9</b>
                  </p>
                  <p>
                    Your results indicate that you are experiencing none, or
                    very few signs of ADHD.
                  </p>
                  <p>
                    These results are not meant to be a diagnosis. You can meet
                    with a doctor or therapist to get a diagnosis and access
                    therapy or medications. Sharing these results with someone
                    you trust can be a great place to start.
                  </p>
                  {/* <button className="next-btn">Loren Ipsum</button> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdhdStyled>
  );
};

export default Bipolar;
