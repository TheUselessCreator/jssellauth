export default class PaymentMethodsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/payment-methods"
    );
  }

  get(shopId, paymentMethodId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/payment-methods/" + paymentMethodId
    );
  }

  create(shopId, data) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/payment-methods",
      data
    );
  }

  update(shopId, paymentMethodId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/payment-methods/" + paymentMethodId,
      data
    );
  }

  delete(shopId, paymentMethodId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/payment-methods/" + paymentMethodId
    );
  }

  toggle(shopId, paymentMethodId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/payment-methods/" + paymentMethodId + "/toggle"
    );
  }

  updateOrder(shopId, paymentMethods) {
    const payload = { paymentMethods: paymentMethods };
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/payment-methods/order",
      payload
    );
  }
}
