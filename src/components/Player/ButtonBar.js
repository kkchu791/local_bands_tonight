import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlayButton } from "./Buttons";

const useStyles = makeStyles(() => ({
  barContainer: {
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
  },
  imageContainer: {
    border: "1px solid orange",
    flexGrow: 1,
    height: "100%",
  },
  image: {
    border: "1px solid green",
    height: "100%",
  },
  songContainer: {
    border: "1px solid blue",
    flexGrow: 2,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:"center",
    justifyContent: "space-around",
  },
  songTitle: {
    border: "1px solid yellow",
    width: "100%",
  },
  artist: {
    border: "1px solid purple",
    width: "100%",
  },
  playerButtonsContainer: {
    border: "1px solid red",
    flexGrow: 1,
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

export const ButtonBar = ({ currentSong, playSong }) => {
  const classes = useStyles();

  return (
    <div className={classes.barContainer}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src="https://loremflickr.com/150/150"
        />
      </div>

      <div className={classes.songContainer}>
        <div className={classes.songTitle}>
          Queen and Slim
        </div>

        <div className={classes.artist}>
          Lena Wraithe
        </div>
      </div>

      <div className={classes.playerButtonsContainer}>
        <div className={classes.prevButton}>
          Prev
        </div>
        <div className={classes.playButton}>
          Play
        </div>
        <div className={classes.nextButton}>
          Next
        </div>
      </div>
    </div>
  );
};


export default ButtonBar;
