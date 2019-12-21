import _ from "lodash";

class PubSub {
  static get subscriptions() {
    return this._subscriptions || [];
  }

  static set subscriptions(_subscriptions) {
    this._subscriptions = _subscriptions;
  }

  static subscribe(callback) {
    this.subscriptions = _.union(this.subscriptions, [callback]);
  }

  static unsubscribe(callback) {
    this.subscriptions = _.pull(this.subscriptions, callback);
  }

  static publishChange(action) {
    this.subscriptions.forEach(cb => cb(action));
  }
}

export default PubSub;
