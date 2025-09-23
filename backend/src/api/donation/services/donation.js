'use strict';

/**
 * donation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::donation.donation');
