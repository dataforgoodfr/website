'use strict';

/**
 * projects-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::projects-list.projects-list');
