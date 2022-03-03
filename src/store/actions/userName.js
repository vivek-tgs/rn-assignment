import {ACTION_TYPE_CONSTANT} from '../../constants';

export const changeUserName = userName => ({
  type: ACTION_TYPE_CONSTANT.setUserName,
  payload: userName,
});
