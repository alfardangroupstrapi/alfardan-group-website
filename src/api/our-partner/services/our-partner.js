'use strict';

/**
 * our-partner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-partner.our-partner');
