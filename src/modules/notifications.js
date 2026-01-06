export default class NotificationsModule {
  constructor(client) {
    this.client = client;
  }

  getLatest(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/notifications/latest"
    );
  }

  getPage(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/notifications/page"
    );
  }

  markAsRead(shopId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/notifications/mark-as-read"
    );
  }

  getSettings(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/notifications/settings"
    );
  }

  updateSettings(shopId, settings) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/notifications/settings",
      settings
    );
  }
}
