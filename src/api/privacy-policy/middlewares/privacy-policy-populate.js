'use strict';

/**
 * `privacy-policy-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In privacy-policy-populate middleware.');

    await next();
  };
};
