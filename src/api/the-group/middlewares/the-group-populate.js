'use strict';

/**
 * `the-group-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In the-group-populate middleware.');

    await next();
  };
};
