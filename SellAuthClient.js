import axios from "axios";
import { exports as MODULES } from "./src/index.js";

/**
 * Custom exception for SellAuth API errors.
 */
export class SellAuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "SellAuthError";
  }
}

export class SellAuthClient {
  constructor(apiKey, baseUrl = "https://api.sellauth.com") {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, "");


    for (const [name, ModuleClass] of Object.entries(MODULES)) {
      this[name.toLowerCase()] = new ModuleClass(this);
    }
  }

  /**
   * Generic request method used by all modules.
   * Supports GET, POST, PUT, DELETE
   */
  async request(method, endpoint, data = null, params = null) {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await axios.request({
        method: method.toUpperCase(),
        url,
        data: data ?? {},
        params: params ?? {},
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        timeout: 30000
      });

      return response.data;
    } catch (err) {

      if (err.response) {
        const message =
          err.response.data?.message ||
          err.response.data ||
          err.response.statusText;

        throw new SellAuthError(
          `HTTP ${err.response.status}: ${message}`
        );
      }


      throw new SellAuthError(`Request error: ${err.message}`);
    }
  }
}
