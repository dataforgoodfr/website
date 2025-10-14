import { THRESHOLDS } from '../utils/config.js';
import { donationJourney } from '../scenarios/donation-journey.js';

/**
 * Load Test
 * Purpose: Test system under sustained high load
 * Duration: 5 minutes
 * Users: Up to 2000 concurrent users
 */
export const options = {
  stages: [
    { duration: '1m', target: 2000 },
    { duration: '3m', target: 2000 },
    { duration: '1m', target: 0 },
  ],
  thresholds: THRESHOLDS.load,
};

export default function () {
  donationJourney();
}
