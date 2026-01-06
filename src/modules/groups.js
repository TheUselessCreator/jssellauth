export default class GroupsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/groups"
    );
  }

  create(shopId, name, visibility, products, imageId = null, badgeColor = null, badgeText = null) {
    const data = {
      name: name,
      visibility: visibility,
      products: products,
      image_id: imageId,
      badge_color: badgeColor,
      badge_text: badgeText
    };
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/groups",
      data
    );
  }

  get(shopId, groupId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/groups/" + groupId
    );
  }

  update(shopId, groupId, name, visibility, products, imageId = null, badgeColor = null, badgeText = null) {
    const data = {
      name: name,
      visibility: visibility,
      products: products,
      image_id: imageId,
      badge_color: badgeColor,
      badge_text: badgeText
    };
    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/groups/" + groupId + "/update",
      data
    );
  }

  delete(shopId, groupId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/groups/" + groupId
    );
  }
}
