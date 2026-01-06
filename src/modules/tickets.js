export default class TicketsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId, filters = {}) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/tickets",
      filters
    );
  }

  get(shopId, ticketId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/tickets/" + ticketId
    );
  }

  create(shopId, customerId, subject, invoiceId = null) {
    const data = { customer_id: customerId, subject: subject, invoice_id: invoiceId };
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/tickets",
      data
    );
  }

  close(shopId, ticketId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/tickets/" + ticketId + "/close"
    );
  }

  reopen(shopId, ticketId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/tickets/" + ticketId + "/reopen"
    );
  }

  archive(shopId, ticketId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/tickets/" + ticketId + "/archive"
    );
  }

  unarchive(shopId, ticketId) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/tickets/" + ticketId + "/unarchive"
    );
  }

  sendMessage(shopId, ticketId, content) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/tickets/" + ticketId + "/messages",
      { content: content }
    );
  }

  deleteMessage(shopId, ticketId, messageId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/tickets/" + ticketId + "/messages/" + messageId
    );
  }
}
