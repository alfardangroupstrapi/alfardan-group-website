'use strict';

/**
 * `news-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In news-populate middleware.');

    await next();
  };
};
