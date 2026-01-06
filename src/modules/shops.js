export default class ShopsModule {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.request(
      "GET",
      "/v1/shops"
    );
  }

  create(name, subdomain, logo = null) {
    const data = { name, subdomain };
    const files = logo ? { logo } : null;
    return this.client.request(
      "POST",
      "/v1/shops/create",
      data,
      files
    );
  }

  get(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId
    );
  }

  update(shopId, kwargs = {}) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/update",
      kwargs
    );
  }

  delete(shopId, name, password) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId,
      { name, password }
    );
  }

  stats(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/stats"
    );
  }
}
