export default class DomainsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/domains"
    );
  }

  create(shopId, domainName) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/domains",
      { domain: domainName }
    );
  }

  get(shopId, domainId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/domains/" + domainId
    );
  }

  delete(shopId, domainId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/domains/" + domainId
    );
  }
}
