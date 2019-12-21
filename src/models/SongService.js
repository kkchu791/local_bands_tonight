import _ from "lodash";
import PubSub from "./PubSub";

const storeSongs = (song, artist_id) => {
  const { id } = song;
  const newSong = parseSong(song, artist_id);
  const newSongs = JSON.stringify({ ...getSongs(), ...{ [id]: newSong } });
  sessionStorage.setItem("songs", newSongs);
};

const parseSong = (song, artist_id) => {
  const newSong = _.pick(song, ["id", "name", "uri"]);

  const artistAlbumData = {
    artist: _.get(song, "artists[0].name"),
    album_url: _.get(song, "album.images[0].url") || "",
    artist_id
  };

  return { ...newSong, ...artistAlbumData };
};

const getSongs = () => JSON.parse(sessionStorage.getItem("songs")) || {};

class SongService {
  static addSongs(songs, artist_id) {
    songs.forEach(song => storeSongs(song, artist_id));

    PubSub.publishChange(this.getAll());
  }

  static getAll() {
    return _.values(getSongs());
  }
}

export default SongService;
