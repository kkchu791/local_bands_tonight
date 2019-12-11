class TokenService {
  static get() {
    return sessionStorage.getItem("token")
  }

  static set(token) {
    sessionStorage.setItem("token", token)
  }
}

export default TokenService;