'use strict';

/**
 * `business-line-country-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In business-line-country-populate middleware.');

    await next();
  };
};
