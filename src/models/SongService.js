import _ from 'lodash';

const storeSongs = (songs) => {
  const newSongList = [...getSongs(), ...songs];
  sessionStorage.setItem("songs", JSON.stringify(newSongList));
}

const parseSong = (song) => {
  return _.pick(song, ['id', 'name', 'uri', 'artists[0].name', 'album.images[0]']);
}

const getSongs = () => {
  return JSON.parse(sessionStorage.getItem("songs")) || [];
}

class SongService {
  static addSongs(songs) {
    let parsedSongs = songs.map(parseSong)
    storeSongs(parsedSongs)
  }

  static getAll() {
    return getSongs()
  }
}

export default SongService;
