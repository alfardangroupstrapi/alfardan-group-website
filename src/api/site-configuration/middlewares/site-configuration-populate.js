'use strict';

/**
 * `site-configuration-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In site-configuration-populate middleware.');

    await next();
  };
};
