import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LandingPage from './components/LandingPage';
import StationList from './components/StationList';
import SongList from './components/SongList';
import TokenService from './models/TokenService';
import {getArtistsByLocationAndGenre} from './apis/artists.api'
import { play } from './apis/songs.api';
import { hash } from './utils/Constants';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "100vh",
    overflowY: "auto",
    textAlign: "center",
    background: "#7CB4B8",
    width: '40%'
  },
}));

const App = (props) => {
  const classes = useStyles();

  const handleStationClick = (genre) => {
    getArtistsByLocationAndGenre(genre);
  }

  useEffect(() => {
    let token = hash.access_token;

    if (token) {
      TokenService.set(token);
      window.token = token
    }

  }, []);

  const playSong = (song) => {
    play(
      {
        playerInstance: window.player,
        spotify_uri: song.uri,
      }
    )
  }


  return (
    <Container fixed className={`${classes.root} App`}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/stations">
            <StationList
              handleStationClick={handleStationClick}
            />
          </Route>
          <Route path="/songs">
            <SongList
              playSong={playSong}
            />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
