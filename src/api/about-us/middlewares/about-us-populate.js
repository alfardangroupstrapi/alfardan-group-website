"use strict";

/**
 * `about-us-populate` middleware
 */
const populate = {
  featuredImage: {
    populate: true,
    fields: ["alternativeText", "url", "name"],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In about-us-populate middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
