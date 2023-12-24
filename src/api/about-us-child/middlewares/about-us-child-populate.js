'use strict';

/**
 * `about-us-child-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In about-us-child-populate middleware.');

    await next();
  };
};
