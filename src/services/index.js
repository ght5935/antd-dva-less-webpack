
import request from '../utils/request';
import config from '../utils/config';
import {toQueryString} from '../utils/constant';

export async function getShowIndex(params) {
  return request(`${config.api.getShowIndex}?${toQueryString(params)}`);
}
