'use strict';

/**
 * resource controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::resource.resource');
