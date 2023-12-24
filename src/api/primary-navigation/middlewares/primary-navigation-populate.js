'use strict';

/**
 * `primary-navigation-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In primary-navigation-populate middleware.');

    await next();
  };
};
