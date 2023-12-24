'use strict';

/**
 * `our-partner-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In our-partner-populate middleware.');

    await next();
  };
};
