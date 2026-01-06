export default class CheckoutModule {
  constructor(client) {
    this.client = client;
  }

  create(
    shopId,
    cart,
    ip = null,
    countryCode = null,
    userAgent = null,
    asn = null,
    email = null,
    discordUserId = null,
    discordUserUsername = null,
    discordAccessToken = null,
    discordRefreshToken = null,
    coupon = null,
    gateway = null,
    newsletter = null,
    affiliate = null
  ) {
    const body = {
      cart: cart
    };

    if (ip !== null) body.ip = ip;
    if (countryCode !== null) body.country_code = countryCode;
    if (userAgent !== null) body.user_agent = userAgent;
    if (asn !== null) body.asn = asn;
    if (email !== null) body.email = email;
    if (discordUserId !== null) body.discord_user_id = discordUserId;
    if (discordUserUsername !== null) body.discord_user_username = discordUserUsername;
    if (discordAccessToken !== null) body.discord_access_token = discordAccessToken;
    if (discordRefreshToken !== null) body.discord_refresh_token = discordRefreshToken;
    if (coupon !== null) body.coupon = coupon;
    if (gateway !== null) body.gateway = gateway;
    if (newsletter !== null) body.newsletter = newsletter;
    if (affiliate !== null) body.affiliate = affiliate;

    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/checkout",
      body
    );
  }
}
