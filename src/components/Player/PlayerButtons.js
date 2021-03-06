import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { 
  ButtonPlay,
  ButtonNext,
  ButtonPrevious,
  ButtonPause,
} from "./Buttons";
import PlayerService from "../../models/PlayerService";

const useStyles = makeStyles(() => ({
  playerButtonsContainer: {
    border: "1px solid red",
    width: "150px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  prevButton: {
    
  },
  playButton: {
    
  },
  nextButton: {

  },
}));

export const PlayerButtons = ({ currentSong, playSong }) => {
  const classes = useStyles();

  return (   
    <div className={classes.playerButtonsContainer}>
      <div className={classes.prevButton}>
        <ButtonPrevious />
      </div>
      <div className={classes.playButton}>
        <ButtonPlay />
      </div>
      <div className={classes.nextButton}>
        <ButtonNext />
      </div>
    </div>
  );
};


export default PlayerButtons;
