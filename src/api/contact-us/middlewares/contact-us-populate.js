'use strict';

/**
 * `contact-us-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In contact-us-populate middleware.');

    await next();
  };
};
