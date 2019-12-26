class PlayerService {
  // static get player() {
  //   return this._player || {};
  // }

  //  static set player() {
  //   this._player = window.player;
  // }

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

  // static playNext() {
  //   this.player.nextTrack();
  // }

  // static playPrevious() {
  //   this.player.previousTrack();
  // }

  // static pause() {
  //  this.player.pause(); 
  // }

  // static resume() {
  //   this.player.resume();
  // }
}

export default PlayerService;
