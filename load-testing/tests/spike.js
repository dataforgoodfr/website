import { THRESHOLDS } from '../utils/config.js';
import { donationJourney } from '../scenarios/donation-journey.js';

/**
 * Spike Test
 * Purpose: Test system under sudden spikes
 * Duration: 10 minutes
 * Users: Sudden spike from 10 to 100 users
 */
export const options = {
  stages: [
    { duration: '1m', target: 10 },
    { duration: '30s', target: 100 }, // Sudden spike
    { duration: '5m', target: 100 },
    { duration: '2m', target: 10 },
    { duration: '1m', target: 0 },
  ],
  thresholds: THRESHOLDS.spike,
};

export default function () {
  donationJourney();
}
