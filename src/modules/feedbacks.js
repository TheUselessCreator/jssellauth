export default class FeedbacksModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/feedbacks"
    );
  }

  get(shopId, feedbackId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/feedbacks/" + feedbackId
    );
  }

  reply(shopId, feedbackId, replyText) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/feedbacks/" + feedbackId + "/reply",
      { reply: replyText }
    );
  }

  dispute(shopId, feedbackId, reason) {
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/feedbacks/" + feedbackId + "/dispute",
      { reason: reason }
    );
  }
}
