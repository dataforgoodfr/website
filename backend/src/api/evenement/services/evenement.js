'use strict';

/**
 * evenement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::evenement.evenement');
