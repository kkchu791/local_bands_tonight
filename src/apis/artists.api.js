import axios from 'axios';
import ArtistService from '../models/ArtistService';
import {getSongsByArtist} from './songs.api';

//const API_BASE_URL = "https://search.bandsintown.com"
const bandsInTownApiKey = ""
const getArtistsByLocationAndGenre = (genre) => {
  const data = {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": bandsInTownApiKey,
      'Access-Control-Allow-Origin': "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT"
    },
    params: {
      query: {
        "entities": [
          {
            "type": "event",
            "order": "rsvps (desc)",
            "limit": 5
          }
        ],
        "location": "region",
        "region": {
          "latitude": 34.0522,
          "longitude": -118.2437,
          "radius": 20
        },
        "filter": "on tour",
        "genre": genre
      }
    }
  }

  return axios.get(`/search`, data)
      .then(res => {
        const artists = res.data._embedded.artists;
        ArtistService.addArtists(artists);
        artists.map(getSongsByArtist);
      })
      .catch(error => {
        console.log("error", error);
      })
}


export {
  getArtistsByLocationAndGenre,
};
