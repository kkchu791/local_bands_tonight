const success = (pos, resolve) => resolve([pos.coords.latitude, pos.coords.longitude]);

class LocationService {
  static getCoordinates(callback) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((pos) => success(pos, resolve));
    });
  }
}

export default LocationService;