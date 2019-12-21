class SetterService {
  static get(name) {
    return JSON.parse(sessionStorage.getItem(name));
  }

  static set(name, item) {
    sessionStorage.setItem(name, JSON.stringify(item));
  }
}

export default SetterService;
