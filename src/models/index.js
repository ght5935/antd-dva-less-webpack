

import { getShowIndex } from '../services/index';
// import { getRoleByUserName } from '../services/navigation';
import { isApiSuccess, apiData, cfShowApiFail } from '../utils/utils';

export default {
  namespace: 'index',
  state: {
    initModule: {},
    stateShow: false
  },
  sunscriptions: {
  },
  effects: {
    * showFlowState({payload}, {put}) {
      yield put({
        type: 'success',
        payload: {
          stateShow: true
        }
      });
    },
    * hideFlowState({payload}, {put}) {
      yield put({
        type: 'success',
        payload: {
          stateShow: false
        }
      });
    },
    * getShowIndex({payload}, {put, call}) {
      const regName = new RegExp('(^| )login_name=([^;]*)(;|$)');
      const userName = document.cookie.match(regName)[2];
      const roleId = yield call(getRoleByUserName, { userName });
      if (isApiSuccess(roleId)) {
        const data = apiData(roleId);
        const response = yield call(getShowIndex, {roleId: data.roleId});
        if (isApiSuccess(response)) {
          const result = apiData(response);
          yield put({
            type: 'success',
            payload: {
              initModule: result
            }
          });
            // 将parentId存在cookie中，用于生成侧边栏
          document.cookie = `parentId=${result.parentId}`;
        } else {
          cfShowApiFail(response);
        }
      }
    }

  },
  reducers: {
    success(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
