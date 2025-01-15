import React, { useState } from "react";
import { AdhdStyled } from "./Adhd.Styled";
import { useHistory } from "react-router-dom";

const ADHD = () => {
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
        "How frequently do you struggle to get things organized when working on a task that requires a high level of organization?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you find it difficult to finish the last details of a project after completing the more challenging aspects?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often do you feel uneasy, worried, or tense in your daily life?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you procrastinate or delay starting tasks that involve a lot of planning or mental effort?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you find yourself fidgeting or shifting in your seat when you need to remain seated for extended periods?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you feel an overwhelming urge to keep moving or doing things, as if you were driven by an internal motor?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you find yourself making careless errors when working on tasks that you find boring or difficult?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you make mistakes because you lose focus when working on tasks that you find uninteresting or demanding?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often do you struggle to locate or find important items at home or at work?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often does noise or activity in your surroundings divert your attention from the task at hand?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question:
        "How often do you find yourself getting up or moving around during meetings or situations where you are expected to stay seated?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often do you experience a need to move or fidget, even when you are supposed to be still?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often do you find it challenging to relax and unwind when you have free time?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often do you catch yourself speaking more than others or dominating conversations in social settings?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "How often do you interrupt people when they are engaged in a task or conversation?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    }
  ];

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setTestComplete(true); // Mark the test as completed
    }
  };

  return (
    <AdhdStyled>
      <div className="adhd">
        <div className="container-fluid">
          <div className="row">
            <button className="back-btn" onClick={handleBackClick}>Back</button>
          </div>
          <div className="row text-center">
            {!testComplete ? (
              <>
                <h2>Assess Your Focus</h2>
                <h4>ADHD Self-Test</h4>
                <p>
                  Please answer the questions below, rating yourself on each of the criteria shown. As you answer each question, select the button that best describes how you have felt and conducted yourself over the past 6 months.
                </p>
              </>
            ) : (
              <>
                <h2>Your Results</h2>
                <h4>ADHD Self-Test</h4>
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
                    Overall Score: <b>3/6</b>, Inattention: <b>4/9</b>, Hyperactivity/Impulsivity: <b>4/9</b>
                  </p>
                  <p>Your results indicate that you are experiencing none, or very few signs of ADHD.</p>
                  <p>
                    These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and access therapy or medications. Sharing these results with someone you trust can be a great place to start.
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

export default ADHD;