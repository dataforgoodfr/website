'use strict';

/**
 * democracy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::democracy.democracy');
