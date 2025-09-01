'use strict';

/**
 * resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::resource.resource');
