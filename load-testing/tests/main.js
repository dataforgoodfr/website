import { THRESHOLDS } from '../utils/config.js';
import { donationJourney, quickPageLoad } from '../scenarios/donation-journey.js';

/**
 * Main Stress-Spike Test Suite
 * Purpose: Test system under high load with traffic spikes
 * Duration: 8 minutes
 * Users: Up to 8000 concurrent users with realistic spikes
 *
 * Profile:
 * - Baseline: 1000 users
 * - Stress: Ramp to 3000 users
 * - Spike: Sudden jump to 8000 users
 * - Recovery: Back to baseline
 */
export const options = {
  scenarios: {
    // 70% users: Complete donation journey
    donation_journey: {
      executor: 'ramping-vus',
      exec: 'completeDonationJourney',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 700 },      // Baseline
        { duration: '1m', target: 2100 },     // Stress test
        { duration: '30s', target: 5600 },    // Spike!
        { duration: '2m', target: 5600 },     // Sustained spike
        { duration: '1m', target: 2100 },     // Recovery
        { duration: '30s', target: 700 },     // Back to baseline
        { duration: '1m', target: 0 },        // Ramp down
      ],
    },

    // 30% users: Just browsing the main page
    page_browsers: {
      executor: 'ramping-vus',
      exec: 'quickPageLoad',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 300 },      // Baseline
        { duration: '1m', target: 900 },      // Stress test
        { duration: '30s', target: 2400 },    // Spike!
        { duration: '2m', target: 2400 },     // Sustained spike
        { duration: '1m', target: 900 },      // Recovery
        { duration: '30s', target: 300 },     // Back to baseline
        { duration: '1m', target: 0 },        // Ramp down
      ],
    },
  },
  thresholds: THRESHOLDS.spike,
};

export function completeDonationJourney() {
  donationJourney();
}

export { quickPageLoad };
