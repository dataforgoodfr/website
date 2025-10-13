import { THRESHOLDS } from '../utils/config.js';
import { donationJourney } from '../scenarios/donation-journey.js';

/**
 * Stress Test
 * Purpose: Find the breaking point
 * Duration: 6 minutes
 * Users: Up to 5000 concurrent users
 */
export const options = {
  stages: [
    { duration: '1m', target: 2000 },
    { duration: '1m', target: 3500 },
    { duration: '2m', target: 5000 },
    { duration: '1m', target: 2000 },
    { duration: '1m', target: 0 },
  ],
  thresholds: THRESHOLDS.stress,
};

export default function () {
  donationJourney();
}
