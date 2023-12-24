'use strict';

/**
 * job-module service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-module.job-module');
