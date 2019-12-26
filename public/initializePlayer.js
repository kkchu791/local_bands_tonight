 window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(window.token || sessionStorage.getItem("token")); },
          repeat_mode: 1,
        });

        // Error handling
        console.log("let see when this hits kirk")
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });

        // Ready
        player.addListener('ready', ({ device_id }) => {
          window.deviceId = device_id;
          console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        // Connect to the player!
        player.connect();

        window.player = player;
      };


const iframe = document.querySelector('iframe[src="https://sdk.scdn.co/embedded/index.html"]');

if (iframe) {
  iframe.style.display = 'block';
  iframe.style.position = 'absolute';
  iframe.style.top = '-1000px';
  iframe.style.left = '-1000px';
}