const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "b9eea442b33044429e31d4706bbd9b34";
const redirectUri = "http://localhost:3000/stations";
const scopes = ["streaming", "user-read-email", "user-read-private"]

export const loginLink = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    if (item) {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
}, {});