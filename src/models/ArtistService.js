import _ from 'lodash';

const generateId = () => {
  const randomId = Math.random().toString(36).substring(6);

  if (sessionStorage.getItem(randomId)) {
    return generateId();
  } else {
    return randomId;
  }
}

const storeArtist = (artist) => {
  const id = generateId();
  artist = JSON.stringify(parseArtist(artist));
  sessionStorage.setItem(id, artist);
}

const parseArtist = (artist) => {
  return _.pick(artist, ['id', 'name']);
}

class ArtistService {
  static addArtists(artists) {
    artists.forEach(artist => storeArtist(artist));
  }
}

export default ArtistService;
