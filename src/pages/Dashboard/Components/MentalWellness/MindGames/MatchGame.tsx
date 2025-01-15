import React, { useState, useEffect } from "react";
import carrot1 from "../../../../../assets/carrot1.png";
import carrot2 from "../../../../../assets/carrot2.png";
import carrot3 from "../../../../../assets/carrot3.png";
import carrot4 from "../../../../../assets/carrot4.png";
import { MatchGameStyled } from "./MatchGame.styled";

const images = [
  { id: 1, img: carrot1 },
  { id: 2, img: carrot2 },
  { id: 3, img: carrot3 },
  { id: 4, img: carrot4 },
];

const MatchGame = () => {
  const [leftImages, setLeftImages] = useState<any>([]);
  const [rightImages, setRightImages] = useState<any>([]);
  const [selectedLeft, setSelectedLeft] = useState<any>(null);
  const [selectedRight, setSelectedRight] = useState<any>(null);
  const [matches, setMatches] = useState<any>([]);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    const shuffledLeft = [...images].sort(() => Math.random() - 0.5);
    const shuffledRight = [...images].sort(() => Math.random() - 0.5);
    setLeftImages(shuffledLeft);
    setRightImages(shuffledRight);
  }, []);

  const handleLeftClick = (image: any) => {
    setSelectedLeft(image);
  };

  const handleRightClick = (image: any) => {
    setSelectedRight(image);

    // Check if the selected pair has already been matched
    const isAlreadyMatched = matches.some(
      (match: any) => match.left.id === image.id
    );

    if (selectedLeft && !isAlreadyMatched) {
      if (selectedLeft?.id === image?.id) {
        // Correct match
        setMatches([...matches, { left: selectedLeft, right: image }]);
        setFeedback("Correct match!");
      } else {
        // Wrong match
        setFeedback("Wrong match, try again.");
      }

      // Reset selections after attempting a match
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  useEffect(() => {
    // Check if all pairs are matched
    if (matches.length === images.length) {
      setFeedback("Congrats! You guessed all correctly!");
    }
  }, [matches]);

  return (
    <MatchGameStyled>
      <div className="match-game">
        <h2>Find the Same Directions</h2>
        <p>{feedback}</p>
        <div className="game-board">
          <div className="side left">
            {leftImages.map((image: any) => (
              <div
                key={image?.id}
                className={`image-box ${
                  selectedLeft === image
                    ? "selected"
                    : matches.some((match: any) => match.left.id === image.id)
                    ? "matched"
                    : ""
                }`}
                onClick={() => handleLeftClick(image)}
              >
                <img src={image?.img} alt={`left ${image?.id}`} />
              </div>
            ))}
          </div>
          <div>
            <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736508494308.png" alt="" />
          </div>

          <div className="side right">
            {rightImages.map((image: any) => (
              <div
                key={image?.id}
                className={`image-box ${
                  selectedRight === image
                    ? "selected"
                    : matches.some((match: any) => match.right.id === image.id)
                    ? "matched"
                    : ""
                }`}
                onClick={() => handleRightClick(image)}
              >
                <img src={image?.img} alt={`right ${image?.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MatchGameStyled>
  );
};

export default MatchGame;
