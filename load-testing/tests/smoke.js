import { THRESHOLDS } from '../utils/config.js';
import { donationJourney } from '../scenarios/donation-journey.js';

/**
 * Smoke Test
 * Purpose: Verify the system works under baseline load
 * Duration: 2 minutes
 * Users: Up to 500 concurrent users
 */
export const options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '1m', target: 500 },
    { duration: '30s', target: 0 },
  ],
  thresholds: THRESHOLDS.smoke,
};

export default function () {
  donationJourney();
}
