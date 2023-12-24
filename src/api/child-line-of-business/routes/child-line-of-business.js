"use strict";

/**
 * child-line-of-business router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::child-line-of-business.child-line-of-business",
  {
    config: {
      find: {
        middlewares: [
          "api::child-line-of-business.child-line-of-business-populate",
        ],
      },
    },
  }
);
