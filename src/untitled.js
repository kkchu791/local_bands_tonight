import React, {useState, useEffect} from "react";
import * as $ from "jquery";
import "./App.css";
import Player from "./components/Player";
import { onSpotifyWebPlaybackSDKReady } from "./models/onSpotifyWebPlaybackSDKReady";
import { getMusicByVenues } from "./apis/bands";
import { hash } from './utils/Constants';

window.location.hash = ""

const App = () => {
  const [token, setToken] = useState(null)
  const [item, setItem] = useState({
                                      album: {
                                        images: [{ url: "" }]
                                      },
                                      name: "",
                                      artists: [{ name: "" }],
                                      duration_ms:0,
                                    })
  const [isPlaying, setIsPlaying] = useState("")
  const [progressMS, setProgressMS] = useState(0)

  useEffect(() => {
    let _token = hash.access_token;

    console.log("we have our token", token)

    if (_token) {
      setToken({token: _token});
    }

  }, []);


  const getLocalBands = async () => {
    let result = await getMusicByVenues("rock", "34", "-118")
    console.log(result, 'result')
  }

  return (
    <div className="App">
      {!token && (
        <div>
          <a
            className="btn btn--loginApp-link"
            href={loginLink}
          >
            Login to Spotify
          </a>

          <button onClick={() => getLocalBands()}> Get Local Bands Songs </button>
        </div>
      )}
      {token && (
        <Player
          item={item}
        />

      )}

    </div>
  );
}
export default App;