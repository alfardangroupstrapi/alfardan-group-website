'use strict';

/**
 * `job-module-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In job-module-populate middleware.');

    await next();
  };
};
