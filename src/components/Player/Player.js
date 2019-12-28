import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { SongList } from "./SongList";
import { SongDetails } from "./SongDetails";
import TokenService from "../../models/TokenService";
import SetterService from "../../models/SetterService";
// import { getArtistsByLocationAndGenre } from "../../apis/artists.api";
import { play } from "../../apis/songs.api";
import { hash } from "../../utils/Constants";
import PlayerService from "../../models/PlayerService";

export const Player = () => {
  const [currentSong, setCurrentSong] = useState({});

  // const handleStationClick = genre => {
  //   getArtistsByLocationAndGenre(genre);
  // };

  useEffect(() => {
    const token = hash.access_token;

    if (token) {
      TokenService.set(token);
      window.token = token;
    }
  }, []);

  const playSong = async (uris) => {    
    let player = await PlayerService.getPlayer({ interval: 1000 }).then((player) =>  {
      console.log("player attached!", player)
      play({
        playerInstance: player,
        spotifyURIs: uris,
      });
    });
  };

  const handleSongDetailsClick = (song) => {
    setCurrentSong(song);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/player">
          <SongList
            playSong={playSong}
            handleSongDetailsClick={handleSongDetailsClick}
            currentSong={currentSong}
          />
        </Route>
        <Route
          path="/song_details/:artist_id"
          component={SongDetails}
          currentSong={currentSong}
        />
      </Switch>
    </Router>
  );
};

export default Player;
