'use strict';

/**
 * blog-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-list.blog-list');
