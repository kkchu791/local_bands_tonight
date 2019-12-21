import * as $ from "jquery";
import SongService from "../models/SongService";
import TokenService from "../models/TokenService";
import SetterService from "../models/SetterService";

const getSongsByArtist = artist => {
  $.ajax({
    url: `https://api.spotify.com/v1/search?q=${artist.name}&type=track&limit=5`,
    type: "GET",
    beforeSend: xhr => {
      xhr.setRequestHeader("Authorization", `Bearer ${TokenService.get()}`);
    },
    success: data => {
      SongService.addSongs(data.tracks.items, artist.id);
    }
  });
};

const play = ({
  spotify_uri,
  playerInstance: {
    _options: { getOAuthToken, id }
  }
}) => {
  getOAuthToken(access_token => {
    console.log(TokenService.get(), "token");
    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${SetterService.get(
        "deviceId"
      )}`,
      {
        method: "PUT",
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenService.get()}`
        }
      }
    );
  });
};

export { getSongsByArtist, play };
