import React from "react";
import { MindGamesStyled } from "./MindGames.styled";
import MatchGame from "./MatchGame";

const MindGames = () => {
  return (
    <MindGamesStyled>
      MindGames
      <MatchGame/>
    </MindGamesStyled>
  );
};

export default MindGames;
