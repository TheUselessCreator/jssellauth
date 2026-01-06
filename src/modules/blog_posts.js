export default class BlogPostsModule {
  constructor(client) {
    this.client = client;
  }

  list(
    shopId,
    page = null,
    perPage = null,
    orderColumn = null,
    orderDirection = null,
    title = null
  ) {
    const data = {};

    if (page !== null) data.page = page;
    if (perPage !== null) data.perPage = perPage;
    if (orderColumn !== null) data.orderColumn = orderColumn;
    if (orderDirection !== null) data.orderDirection = orderDirection;
    if (title !== null) data.title = title;

    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/blog-posts",
      Object.keys(data).length ? data : null
    );
  }

  get(shopId, blogPostId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/blog-posts/" + blogPostId
    );
  }

  create(
    shopId,
    title,
    content,
    path = null,
    summary = null,
    imageId = null,
    metaTitle = null,
    metaDescription = null
  ) {
    const body = {
      title: title,
      content: content
    };

    if (path !== null) body.path = path;
    if (summary !== null) body.summary = summary;
    if (imageId !== null) body.image_id = imageId;
    if (metaTitle !== null) body.meta_title = metaTitle;
    if (metaDescription !== null) body.meta_description = metaDescription;

    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/blog-posts",
      body
    );
  }

  update(
    shopId,
    blogPostId,
    title,
    content,
    path = null,
    summary = null,
    imageId = null,
    metaTitle = null,
    metaDescription = null
  ) {
    const body = {
      id: blogPostId,
      title: title,
      content: content
    };

    if (path !== null) body.path = path;
    if (summary !== null) body.summary = summary;
    if (imageId !== null) body.image_id = imageId;
    if (metaTitle !== null) body.meta_title = metaTitle;
    if (metaDescription !== null) body.meta_description = metaDescription;

    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/blog-posts/" + blogPostId,
      body
    );
  }

  delete(shopId, blogPostId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/blog-posts/" + blogPostId
    );
  }
}
