export default class CryptoWalletModule {
  constructor(client) {
    this.client = client;
  }

  payouts(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/payouts"
    );
  }

  balances(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/payouts/balances"
    );
  }

  payout(shopId, currency, address, amount) {
    const body = {
      currency: currency,
      address: address,
      amount: amount
    };
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/payouts/payout",
      body
    );
  }

  transactions(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/payouts/transactions"
    );
  }
}
