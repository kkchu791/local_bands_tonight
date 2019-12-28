import PubSub from './PubSub';

const getSongById = (songId) => {
  const songs = JSON.parse(sessionStorage.getItem("songs"))
  return songs[songId];
}

class PlayerService {
  static get player() {
    return window.player || {};
  }

  static getPlayer(interval) {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (window.deviceId) {
          clearInterval();
          resolve(window.player);

        } else {
          console.log("polling");
        }
      }, interval.interval);
    });
  }

  static getState() {
    return this.player.getCurrentState();
  }

  static async play() {
    const playerState = await this.getState();

    if (playerState.paused) {
      this.player.resume();  
    } else {
      this.player.pause();
    }
  }

  static async getNextTrack() {
    const playerState = await this.getState();
    return playerState.track_window.next_tracks[0];
  }

  static async playNext() {
    this.player.nextTrack();
    const nextTrack = await this.getNextTrack();

    if (!nextTrack) return;

    PubSub.publishSongChange(getSongById(nextTrack.id));
  }

  static async getPreviousTrack() {
    const playerState = await this.getState();
    return playerState.track_window.previous_tracks[0];
  }

  static async playPrevious() {
    this.player.previousTrack();
    const previousTrack = await this.getPreviousTrack();

    if (!previousTrack) return;

    PubSub.publishSongChange(getSongById(previousTrack.id));
  }
}

export default PlayerService;
