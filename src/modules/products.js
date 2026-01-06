export default class ProductsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId, params = null) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/products",
      params
    );
  }

  get(shopId, productId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/products/" + productId
    );
  }

  create(shopId, data) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/products",
      data
    );
  }

  update(shopId, productId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/" + productId + "/update",
      data
    );
  }

  delete(shopId, productId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/products/" + productId
    );
  }

  clone(shopId, productId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/products/" + productId + "/clone"
    );
  }

  updateStock(shopId, productId, variantId, data = null) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/" + productId + "/stock/" + variantId,
      data
    );
  }

  getDeliverables(shopId, productId, variantId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/products/" + productId + "/deliverables/" + variantId
    );
  }

  appendDeliverables(shopId, productId, variantId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/" + productId + "/deliverables/append/" + variantId,
      data
    );
  }

  overwriteDeliverables(shopId, productId, variantId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/" + productId + "/deliverables/overwrite/" + variantId,
      data
    );
  }

  updateOrder(shopId, sortedIds) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/sort",
      { sortedIds: sortedIds }
    );
  }

  bulkUpdateDisabledPaymentMethods(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/disabled-payment-methods",
      data
    );
  }

  bulkUpdateCustomFields(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/custom-fields",
      data
    );
  }

  bulkUpdateDiscordIntegration(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/discord-integration",
      data
    );
  }

  bulkUpdateDescription(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/description",
      data
    );
  }

  bulkUpdateInstructions(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/instructions",
      data
    );
  }

  bulkUpdateOutOfStockMessage(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/out-of-stock-message",
      data
    );
  }

  bulkUpdateSecurity(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/security",
      data
    );
  }

  bulkUpdateBadges(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/badges",
      data
    );
  }

  bulkUpdateStatus(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/status",
      data
    );
  }

  bulkUpdateVisibility(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/visibility",
      data
    );
  }

  bulkUpdateLiveStats(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/live-stats",
      data
    );
  }

  bulkUpdateFeedbackCoupon(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/feedback-coupon",
      data
    );
  }

  bulkUpdateVolumeDiscounts(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/volume-discounts",
      data
    );
  }

  bulkUpdateRedirectUrl(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/redirect-url",
      data
    );
  }

  bulkUpdateDeliverablesType(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/deliverables-type",
      data
    );
  }

  bulkUpdateDeliverablesLabel(shopId, data) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/products/bulk-update/deliverables-label",
      data
    );
  }
}
