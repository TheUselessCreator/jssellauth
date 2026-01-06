export default class CustomFieldsModule {
  constructor(client) {
    this.client = client;
  }

  list(shopId) {
    return this.client.request(
      "GET",
      "/v1/shops/" + shopId + "/custom-fields"
    );
  }

  create(
    shopId,
    name,
    type,
    placeholder = null,
    hint = null,
    options = null,
    defaultValue = null,
    regex = null,
    isRequired = null
  ) {
    const body = {
      name: name,
      type: type
    };

    if (placeholder !== null) body.placeholder = placeholder;
    if (hint !== null) body.hint = hint;
    if (options !== null) body.options = options;
    if (defaultValue !== null) body.default = defaultValue;
    if (regex !== null) body.regex = regex;
    if (isRequired !== null) body.is_required = isRequired;

    return this.client.request(
      "POST",
      "/v1/shops/" + shopId + "/custom-fields",
      body
    );
  }

  update(
    shopId,
    customFieldId,
    name,
    type,
    placeholder = null,
    hint = null,
    options = null,
    defaultValue = null,
    regex = null,
    isRequired = null
  ) {
    const body = {
      name: name,
      type: type
    };

    if (placeholder !== null) body.placeholder = placeholder;
    if (hint !== null) body.hint = hint;
    if (options !== null) body.options = options;
    if (defaultValue !== null) body.default = defaultValue;
    if (regex !== null) body.regex = regex;
    if (isRequired !== null) body.is_required = isRequired;

    return this.client.request(
      "PUT",
      "/v1/shops/" + shopId + "/custom-fields/" + customFieldId,
      body
    );
  }

  delete(shopId, customFieldId) {
    return this.client.request(
      "DELETE",
      "/v1/shops/" + shopId + "/custom-fields/" + customFieldId
    );
  }
}
