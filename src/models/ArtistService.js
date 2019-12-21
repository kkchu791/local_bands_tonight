import _ from "lodash";

const storeEvents = (event, artists, venues) => {
  const id = event.artist_id;
  const newEvent = parseArtist(event, artists, venues);
  const newEvents = JSON.stringify({ ...getEvents(), ...{ [id]: newEvent } });
  sessionStorage.setItem("events", newEvents);
};

const parseArtist = (event, artists, venues) => {
  const newEvent = _.pick(event, [
    "starts_at",
    "ticket_available",
    "ticket_url"
  ]);

  const artistVenueData = {
    artist: getArtistNameById(artists, event.artist_id),
    venue: getVenueNameById(venues, event.venue_id)
  };

  return { ...newEvent, ...artistVenueData };
};

const getArtistNameById = (artists, id) => {
  const artist = _.find(artists, ["id", id]);
  return artist.name;
};

const getVenueNameById = (venues, id) => {
  const venue = _.find(venues, ["id", id]);
  return venue.name;
};

const getEvents = () => JSON.parse(sessionStorage.getItem("events")) || {};

class ArtistService {
  static addArtists(events, artists, venues) {
    events.forEach(event => storeEvents(event, artists, venues));
  }

  static getEvent(artist_id) {
    console.log(getEvents()[artist_id], "artist HELLO");
    return getEvents()[artist_id];
  }
}

export default ArtistService;
