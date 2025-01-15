import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ReactComponent as Star } from "../../../../assets/icons/ratingStar.svg";
import { LeaveFeedbackFormStyled } from "./LeaveFeedback.styled";
import Very_Bad_img from "../../../../assets/images/dashboard/Very_Bad_img.png";
import Poor_img from "../../../../assets/images/dashboard/Poor_img.png";
import Ok_img from "../../../../assets/images/dashboard/Ok_img.png";
import Good_img from "../../../../assets/images/dashboard/Good_img.png";
import Excellent_img from "../../../../assets/images/dashboard/Excellent_img.png";
import { feedBackAPI } from "../../../../redux/slices/bookingScreen/bookingScreenService";

const LeaveFeedback = ({ bookingId, onClose }: any) => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedRatingText, setSelectedRatingText] = useState<any>("");
  const [comment, setComment] = useState("");
  const [issueId, setIssueId] = useState();
  const ratingTexts = [
    { emoji: "", text: "" },
    { emoji: Very_Bad_img, text: "Very Bad", value: 1 },
    { emoji: Poor_img, text: "Poor", value: 2 },
    { emoji: Ok_img, text: "Ok", value: 3 },
    { emoji: Good_img, text: "Good", value: 4 },
    { emoji: Excellent_img, text: "Excellent", value: 5 },
  ];

  const handleStarClick = (index: any) => {
    setRating(index);
    setSelectedRatingText(ratingTexts[index]?.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const selectedText = selectedRatingText || "No rating selected";
    const commentText = comment || "No comment provided";
    console.log(`Selected rating: ${selectedText}`);
    console.log(`Comment: ${commentText}`);
    setIsSubmitted(onClose);

    const raiseIssueObjBody = {
      feedback: commentText,
      rating: selectedText,
    };
    const raiseIssueObj = {
      bookingId,
      raiseIssueObjBody,
    };
    const resultAction = await dispatch(feedBackAPI(raiseIssueObj));
    const resultActionString = JSON.stringify(resultAction);
    const resJSON = JSON.parse(resultActionString);

    setIssueId(resJSON.payload.data.bookingComment.id);
    setIsSubmitted(true);
  };
  console.log(bookingId, "bookingId");

  return (
    <LeaveFeedbackFormStyled>
      <div>
        {!isSubmitted && (
          <div className="container">
            <div className="formContainer p-4 shadow rounded">
              <div className="header">
                <button title="Close" onClick={onClose} className="closeButton">
                  <AiOutlineClose size={20} />
                </button>
              </div>
              <div className="rating-heading-div">
                <p>Thanks for choosing our service</p>
                <h4>Rate your experience</h4>
              </div>
              <div className="rating-star-icon-div">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label className="container" key={star}>
                    <input
                      type="checkbox"
                      checked={rating >= star}
                      onChange={() => handleStarClick(star)}
                    />
                    <Star />
                  </label>
                ))}
              </div>

              <hr className="dotted-line" />
              {ratingTexts.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: rating === index ? "" : "none",
                  }}
                  className="feedback_emoji_div"
                >
                  <h4>
                    {item.emoji && <img src={item.emoji} alt={item.text} />}
                  </h4>

                  <h4>{item.text}</h4>
                </div>
              ))}

              <div className="textarea-div">
                <textarea
                  id="message"
                  className="message-input shadow-none mt-3"
                  placeholder="Comments"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <div className="rating-submit-div">
                <button
                  className="btn rating-submit-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </LeaveFeedbackFormStyled>
  );
};

export default LeaveFeedback;
