import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  songContainer: {
    display: "flex",
    margin: "10px 0", 
    border: "1px solid black",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
  },
  songDetailsInfo: {
    flex: "1",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  songInfo: {
    width: "100%",
  },

  ticketInfo: {
    width: "100%",
  },
  detailsButton: {
    height: "100%",
    alignItems: "center",
    borderLeft: "1px solid black",
    justifyContent: "center",
  },
}));

export const SongCard = ({ song, index, playSong, handleSongDetailsClick }) => {
  const classes = useStyles();
  return (
    <div
      key={index}
      onClick={() => playSong(song)}
      className={classes.songContainer}
    >

      <div className={classes.songDetailsContainer}>
        <div className={classes.songInfo}>
          {song.name} • {song.artist}
        </div>

        <div className={classes.ticketInfo}>
          Tickets available from $32
        </div>
      </div>
      
      <div className={classes.detailsButton}>
        Details Button
      </div>
    </div>
  );
};

export default SongCard;
