'use strict';

/**
 * faq service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faq.faq');
