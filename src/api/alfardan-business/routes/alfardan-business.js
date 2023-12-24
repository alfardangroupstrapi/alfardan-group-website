"use strict";

/**
 * alfardan-business router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::alfardan-business.alfardan-business", {
  config: {
    find: {
      middlewares: ["api::alfardan-business.alfardan-business-populate"],
    },
  },
});
