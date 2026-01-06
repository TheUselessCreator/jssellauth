export default class CouponsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/coupons"
    );
  }

  get(shopId, couponId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/coupons/" + couponId
    );
  }

  create(
    shopId,
    code,
    global_,
    discount,
    type,
    disableIfVolumeDiscount,
    maxUses = null,
    maxUsesPerCustomer = null,
    minInvoicePrice = null,
    startDate = null,
    expirationDate = null,
    allowedEmails = null,
    items = null
  ) {
    const body = {
      code: code,
      global: global_,
      discount: discount,
      type: type,
      disable_if_volume_discount: disableIfVolumeDiscount
    };

    if (maxUses !== null) body.max_uses = maxUses;
    if (maxUsesPerCustomer !== null) body.max_uses_per_customer = maxUsesPerCustomer;
    if (minInvoicePrice !== null) body.min_invoice_price = minInvoicePrice;
    if (startDate !== null) body.start_date = startDate;
    if (expirationDate !== null) body.expiration_date = expirationDate;
    if (allowedEmails !== null) body.allowed_emails = allowedEmails;
    if (items !== null) body.items = items;

    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/coupons",
      body
    );
  }

  update(
    shopId,
    couponId,
    code,
    global_,
    discount,
    type,
    disableIfVolumeDiscount,
    maxUses = null,
    maxUsesPerCustomer = null,
    minInvoicePrice = null,
    startDate = null,
    expirationDate = null,
    allowedEmails = null,
    items = null
  ) {
    const body = {
      code: code,
      global: global_,
      discount: discount,
      type: type,
      disable_if_volume_discount: disableIfVolumeDiscount
    };

    if (maxUses !== null) body.max_uses = maxUses;
    if (maxUsesPerCustomer !== null) body.max_uses_per_customer = maxUsesPerCustomer;
    if (minInvoicePrice !== null) body.min_invoice_price = minInvoicePrice;
    if (startDate !== null) body.start_date = startDate;
    if (expirationDate !== null) body.expiration_date = expirationDate;
    if (allowedEmails !== null) body.allowed_emails = allowedEmails;
    if (items !== null) body.items = items;

    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/coupons/" + couponId + "/update",
      body
    );
  }

  delete(shopId, couponId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/coupons/" + couponId
    );
  }

  deleteUsed(shopId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/coupons/used"
    );
  }
}
