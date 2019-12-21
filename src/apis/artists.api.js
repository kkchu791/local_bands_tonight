import axios from "axios";
import ArtistService from "../models/ArtistService";
import { getSongsByArtist } from "./songs.api";

const API_BASE_URL = "https://search.bandsintown.com";
const bandsInTownApiKey = "";

const getArtistsByLocationAndGenre = () => {
  const data = {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": bandsInTownApiKey,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    },
    params: {
      query: {
        entities: [
          {
            type: "event",
            order: "rsvps (desc)",
            limit: 5,
          },
        ],
        location: "region",
        region: {
          latitude: 34.0522,
          longitude: -118.2437,
          radius: 20,
        },
        filter: "on tour",
      },
    },
  };

  return axios
    .get(`https://cors-anywhere.herokuapp.com/${API_BASE_URL}/search`, data)
    .then((res) => {
      // we want to get the events and add them to our service
      const { events } = res.data;
      const { artists } = res.data._embedded;
      const { venues } = res.data._embedded;

      ArtistService.addArtists(events, artists, venues);

      artists.map(getSongsByArtist);
    })
    .catch((error) => error);
};

export { getArtistsByLocationAndGenre };

export default getArtistsByLocationAndGenre;
