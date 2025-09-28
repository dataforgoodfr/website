#!/usr/bin/env node

// This wrapper ensures environment variables are properly passed to the Next.js standalone server
// The standalone server doesn't automatically pick up runtime environment variables

// Make sure all environment variables are available
process.env.BREVO_API_KEY = process.env.BREVO_API_KEY;
process.env.STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
process.env.STRAPI_API_URL = process.env.STRAPI_API_URL;

// Now start the actual Next.js server
require('./server.js');