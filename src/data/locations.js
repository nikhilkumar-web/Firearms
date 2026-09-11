// 50 US States and their corresponding top cities matching americanfirearmsnetwork.com
import usCitiesData from './usCitiesByState.json';

export const CITIES_BY_STATE = usCitiesData;

export const US_STATES = Object.keys(usCitiesData);

export function getCitiesForState(state) {
  if (!state || !CITIES_BY_STATE[state]) {
    return [];
  }
  return CITIES_BY_STATE[state];
}
