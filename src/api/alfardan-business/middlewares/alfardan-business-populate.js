"use strict";

/**
 * `alfardan-business-populate` middleware
 */

const populate = {
  businessLineCountries: {
    populate: true,
  },
  socialMediaLinks: {
    populate: {
      socialMediaIcon: {
        populate: true,
      },
    },
  },
  websiteLinks: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In alfardan-business-populate middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
