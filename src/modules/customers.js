export default class CustomersModule {
  constructor(client) {
    this.client = client;
  }

  list(
    shopId,
    page = null,
    perPage = null,
    orderColumn = null,
    orderDirection = null,
    id = null,
    email = null,
    discordId = null,
    discordUsername = null,
    subscribed = null
  ) {
    const body = {};

    if (page !== null) body.page = page;
    if (perPage !== null) body.perPage = perPage;
    if (orderColumn !== null) body.orderColumn = orderColumn;
    if (orderDirection !== null) body.orderDirection = orderDirection;
    if (id !== null) body.id = id;
    if (email !== null) body.email = email;
    if (discordId !== null) body.discord_id = discordId;
    if (discordUsername !== null) body.discord_username = discordUsername;
    if (subscribed !== null) body.subscribed = subscribed;

    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/customers",
      Object.keys(body).length ? body : null
    );
  }

  editBalance(shopId, customerId, amount, description = null) {
    const body = { amount: amount };
    if (description !== null) body.description = description;

    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/customers/" + customerId + "/balance",
      body
    );
  }
}
