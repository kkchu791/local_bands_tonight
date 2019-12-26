import * as $ from "jquery";
import SongService from "../models/SongService";
import TokenService from "../models/TokenService";
import SetterService from "../models/SetterService";

const getSongsByArtist = (artist) => {
  $.ajax({
    url: `https://api.spotify.com/v1/search?q=${artist.name}&type=track&limit=5`,
    type: "GET",
    beforeSend: (xhr) => {
      xhr.setRequestHeader("Authorization", `Bearer ${TokenService.get()}`);
    },
    success: (data) => {
      SongService.addSongs(data.tracks.items, artist.id);
    },
  });
};

const play = ({
  spotifyURIs,
  playerInstance: {
    _options: { getOAuthToken, id },
  },
}) => {
  console.log(window.deviceId, "device ID");
  getOAuthToken(() => {
    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${window.deviceId|| SetterService.get("deviceId")}`,
      {
        method: "PUT",
        body: JSON.stringify({ uris: spotifyURIs, repeat_mode: 1 }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenService.get()}`,
        },
      },
    );
  });
};

export { getSongsByArtist, play };
