import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { SongCard } from "./SongCard";
import { ButtonBar } from "./ButtonBar";
import SongService from "../../models/SongService";
import PubSub from "../../models/PubSub";
import SetterService from "../../models/SetterService";

const useStyles = makeStyles(theme => ({
  songTitle: {
    fontSize: "24px"
  },
  songList: {
    maxHeight: "500px"
  }
}));

export const SongList = ({ playSong, handleSongDetailsClick, currentSong }) => {
  const classes = useStyles();

  const [songs, setSongs] = useState(SongService.getAll());

  useEffect(() => {
    PubSub.subscribe(setSongs);

    return () => PubSub.unsubscribe(setSongs);
  }, []);

  useEffect(() => {
    if (window.deviceId) {
      console.log("setting device id and player");
      SetterService.set("player", window.player);
      SetterService.set("deviceId", window.deviceId);
    }
  }, []);

  return (
    <div className={classes.songList}>
      <Typography variant="h2" className={classes.songTitle}>
        Songs
      </Typography>

      {songs.map((song, index) => (
        <SongCard
          song={song}
          key={index}
          playSong={playSong}
          handleSongDetailsClick={handleSongDetailsClick}
        />
      ))}

      <ButtonBar currentSong={currentSong} />
    </div>
  );
};
export default SongList;
