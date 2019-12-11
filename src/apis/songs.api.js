import SongService from '../models/SongService';
import * as $ from "jquery";
import TokenService from '../models/TokenService';

const getSongsByArtist = (artist) => {
  $.ajax({
    url: `https://api.spotify.com/v1/search?q=${artist.name}&type=track&limit=5`,
    type: "GET",
    beforeSend: (xhr) => {
      xhr.setRequestHeader("Authorization", "Bearer " + TokenService.get());
    },
    success: (data) => {
      SongService.addSongs(data.tracks.items)
    }
  });
}

const play = ({
  spotify_uri,
  playerInstance: {
    _options: {
      getOAuthToken,
      id
    }
  }
}) => {
  getOAuthToken(access_token => {
    const deviceId = "";

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

export {
  getSongsByArtist,
  play,
};
