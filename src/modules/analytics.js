export default class AnalyticsModule {
  constructor(client) {
    this.client = client;
  }

  /**
   * Retrieves revenue, orders and customers analytics in a given timeframe.
   *
   * GET /v1/shops/{shopId}/analytics
   */
  get(shopId) {
    return this.client.request(
      "GET",
      `/v1/shops/${shopId}/analytics`
    );
  }

  graph(shopId) {
    return this.client.request(
      "GET",
      `/v1/shops/${shopId}/analytics/graph`
    );
  }

  topProducts(shopId) {
    return this.client.request(
      "GET",
      `/v1/shops/${shopId}/analytics/top-products`
    );
  }

  topCustomers(shopId) {
    return this.client.request(
      "GET",
      `/v1/shops/${shopId}/analytics/top-customers`
    );
  }
}
