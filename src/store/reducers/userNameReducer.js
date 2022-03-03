import {ACTION_TYPE_CONSTANT} from '../../constants';

const initialState = {
  userName: '',
};
const UserNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_CONSTANT.setUserName:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
export default UserNameReducer;
