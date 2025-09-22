'use strict';

/**
 * resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resource.resource');
