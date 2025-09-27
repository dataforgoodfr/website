'use strict';

/**
 * cgu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cgu.cgu');
