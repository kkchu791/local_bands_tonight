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

  static async play() {
    const currentState = await this.player.getCurrentState();

    if (currentState.paused) {
      this.player.resume();
    } else {
      this.player.pause();
    }
  }

  static playNext() {
    this.player.nextTrack();
  }

  static playPrevious() {
    this.player.previousTrack();
  }
}

export default PlayerService;
