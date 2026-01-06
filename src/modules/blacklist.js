export default class BlacklistModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/blacklist"
    );
  }

  create(shopId, value, type, matchType, reason = null) {
    const body = {
      value: value,
      type: type,
      match_type: matchType
    };

    if (reason !== null) {
      body.reason = reason;
    }

    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/blacklist",
      body
    );
  }

  get(shopId, blacklistId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/blacklist/" + blacklistId
    );
  }

  delete(shopId, blacklistId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/blacklist/" + blacklistId
    );
  }

  update(shopId, blacklistId, value, type, matchType, reason = null) {
    const body = {
      value: value,
      type: type,
      match_type: matchType
    };

    if (reason !== null) {
      body.reason = reason;
    }

    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/blacklist/" + blacklistId + "/update",
      body
    );
  }
}
