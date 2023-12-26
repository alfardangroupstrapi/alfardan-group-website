'use strict';

/**
 * `test-populate` middleware
 */
const populate = {
  Img: {
    populate: {
        populate: true,
        fields: ["alternativeText", "url", "name"],
    },
  },
};
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In test-populate middleware.');
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
