import fs from "fs";

export default class ImagesModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/images"
    );
  }

  upload(shopId, imagePath) {
    const fileStream = fs.createReadStream(imagePath);
    const formData = { image: fileStream };
    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/images",
      formData
    );
  }

  delete(shopId, imageId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/images/" + imageId
    );
  }
}
