import http from 'k6/http';
import { BASE_URL } from '../utils/config.js';
import { checkResponse, thinkTime } from '../utils/helpers.js';

/**
 * Main Donation Journey Scenario
 * Simulates a user scrolling through the main page and navigating to the donation page
 * Total duration: ~1 minute
 */
export function donationJourney() {
  // Step 1: Load main page
  const mainPageRes = http.get(`${BASE_URL}/`, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  });

  checkResponse(mainPageRes, 200, 'main page loaded successfully');

  // Simulate scrolling/reading the main page (~20-30 seconds)
  thinkTime(20, 30);

  // Step 2: Navigate to donation page
  const donationPageRes = http.get(`${BASE_URL}/faire-un-don`, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      'Referer': `${BASE_URL}/`,
    },
  });

  checkResponse(donationPageRes, 200, 'donation page loaded successfully');

  // Simulate reading the donation page (~20-30 seconds)
  thinkTime(20, 30);
}

/**
 * Quick Page Load
 * Simulates a user just loading and quickly browsing the main page
 * Total duration: ~30-45 seconds
 */
export function quickPageLoad() {
  const res = http.get(`${BASE_URL}/`, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  });

  checkResponse(res, 200, 'page load successful');

  // Quick browsing (~30-45 seconds)
  thinkTime(30, 45);
}
