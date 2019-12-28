import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlayerButtons } from "./PlayerButtons";
import _ from 'lodash';


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
          src={_.get(currentSong, 'album_url', '')}
        />
      </div>

      <div className={classes.songContainer}>
        <div className={classes.songTitle}>
          {currentSong.name}
        </div>

        <div className={classes.artist}>
          {currentSong.artist}
        </div>
      </div>

      <PlayerButtons />
    </div>
  );
};


export default ButtonBar;
