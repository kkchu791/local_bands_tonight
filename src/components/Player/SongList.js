
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { SongCard } from "./SongCard";
import { ButtonBar } from "./ButtonBar";
import SongService from "../../models/SongService";
import LocationService from "../../models/LocationService";
import PubSub from "../../models/PubSub";
import SetterService from "../../models/SetterService";
import getArtistsByLocationAndGenre from "../../apis/artists.api";

const useStyles = makeStyles((theme) => ({
  songListContainer: {
    display: "flex",
    border: "1px solid black",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100vh",
  },
  songTitle: {
    border: "1px solid green",
  },
  songList: {
    flex: 3,
    height: "600px",
    overflowY: "scroll",
    border: "1px solid blue",
  },
  buttonBar: {
    flex: 1,
    border: "1px solid orange",
  },
}));

export const SongList = ({ playSong, handleSongDetailsClick }) => {
  const classes = useStyles();

  const [songs, setSongs] = useState(SongService.getAll());
  const [currentSong, setCurrentSong] = useState(songs[0] || {});

  useEffect(() => {
    const getArtistsByLocation = async () => {
      const coords = await LocationService.getCoordinates();

      await getArtistsByLocationAndGenre(coords);


      PubSub.subscribe(setSongs);
      PubSub.subscribe(setCurrentSong);

      console.log(SongService.getAllURIs(), "SongService.getAllURIs()")
      playSong(SongService.getAllURIs());
    };

    getArtistsByLocation();


    return () => {
      PubSub.unsubscribe(setSongs);
      PubSub.unsubscribe(setCurrentSong);
    }
  }, []);

  useEffect(() => {
    if (window.deviceId) {
      console.log("setting device id and player");
      SetterService.set("player", window.player);
      SetterService.set("deviceId", window.deviceId);
    }
  }, []);

  return (
    <div className={classes.songListContainer}>
      <div className={classes.songTitle}>
        <Typography variant="h4">
          Songs
        </Typography>
      </div>

      <div className={classes.songList}>
        {songs.map((song, index) => (
          <SongCard
            song={song}
            key={index}
            playSong={playSong}
            handleSongDetailsClick={handleSongDetailsClick}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
      <div className={classes.buttonBar}>
        <ButtonBar currentSong={currentSong} playSong={playSong} />
      </div>
    </div>
  );
};
export default SongList;
