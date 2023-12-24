"use strict";

/**
 * `child-line-of-business-populate` middleware
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
  lineOfBusiness: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In child-line-of-business-populate middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
