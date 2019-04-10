import {
  handleActions,
} from 'redux-actions';
import * as types from '../constants/actionTypes';
const initialState = {
  loading: true, // 加载中
  logged: false, // 是否登录
  gomall: false, // 控制进入Mall开关
};
const handler = {};
handler[types.BASE_LOADING] = (state, action) => {
  const {
    loading,
  } = action;
  return { ...state,
    loading,
  };
};
handler[types.SET_SIGIN_STATE] = (state, action) => {
  const {
    logged,
  } = action;
  return { ...state,
    logged,
  };
};
handler[types.GO_MALL] = (state, action) => {
  const {
    gomall,
  } = action;
  return { ...state,
    gomall,
  };
};
export default handleActions(handler, initialState);
