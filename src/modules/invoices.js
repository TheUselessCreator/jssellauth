export default class InvoicesModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId, params = null) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/invoices",
      params
    );
  }

  get(shopId, invoiceId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId
    );
  }

  archive(shopId, invoiceId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/archive"
    );
  }

  unarchive(shopId, invoiceId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/unarchive"
    );
  }

  cancel(shopId, invoiceId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/cancel"
    );
  }

  refund(shopId, invoiceId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/refund"
    );
  }

  unrefund(shopId, invoiceId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/unrefund"
    );
  }

  updateDashboardNote(shopId, invoiceId, note) {
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/dashboard-note",
      { note: note }
    );
  }

  getPdf(shopId, invoiceId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/pdf"
    );
  }

  process(shopId, invoiceId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/process"
    );
  }

  replaceDelivered(shopId, invoiceId, invoiceItemId, replacements) {
    const payload = { invoice_item_id: invoiceItemId, replacements: replacements };
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/invoices/" + invoiceId + "/replace-delivered",
      payload
    );
  }
}
