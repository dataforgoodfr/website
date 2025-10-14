import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

/**
 * Check HTTP response and track errors
 */
export function checkResponse(res, expectedStatus = 200, checkName = 'status is 200') {
  const statusCheck = Array.isArray(expectedStatus)
    ? expectedStatus.includes(res.status)
    : res.status === expectedStatus;

  const result = check(res, {
    [checkName]: () => statusCheck,
  });

  errorRate.add(!result);

  return result;
}

/**
 * Simulate realistic think time between actions
 */
export function thinkTime(min = 1, max = 3) {
  sleep(Math.random() * (max - min) + min);
}

/**
 * Get random element from array
 */
export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
