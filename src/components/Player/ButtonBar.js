import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../common/Card";
import CardSection from "../common/CardSection";
import { PlayButton } from "./Buttons";

const useStyles = makeStyles(() => ({
  player: {
    border: "1px solid black",
    width: "87%",
    position: "absolute",
    bottom: "37px",
    height: "75px",
  },
}));

export const ButtonBar = ({ currentSong, playSong }) => {
  const classes = useStyles();

  return (
    <div className={classes.player}>
      <Card>
        <CardSection>
          {currentSong ? (
            <div>
              <div style={styles.thumbnailContainerStyle}>
                <img
                  style={styles.thumbnailStyle}
                  src={currentSong.album_url}
                  alt="album"
                />
              </div>

              <div style={styles.headerContentStyle}>
                <div style={styles.headerTextStyle}>{currentSong.name}</div>
                <div className="artist-album">
                  <span className="artist">
                    {currentSong.artist}
                    {" "}
•
                  </span>

                  <span className="album">Isolation</span>
                </div>
              </div>

              <div className="player-actions">
                <PlayButton currentSong={currentSong} playSong={playSong} />
              </div>
            </div>
          ) : (
            <div>Loading..</div>
          )}
        </CardSection>
      </Card>
    </div>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  headerTextStyle: {
    fontSize: "18px",
    background: "red",
  },
  thumbnailStyle: {
    height: "50px",
    width: "50px",
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

export default ButtonBar;
