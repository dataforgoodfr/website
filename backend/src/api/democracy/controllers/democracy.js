'use strict';

/**
 * democracy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::democracy.democracy');
