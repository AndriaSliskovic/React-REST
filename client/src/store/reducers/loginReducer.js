import {
  SETTINGS,
  IS_SIGNIN,
  SIGNIN,
  SIGNOUT,
  USER_ID,
  USER_PROFILE,
  AUTH,
  ADMIN
} from '../actions/types';


const INITIAL_STATE={
    isSignIn:null,
    userProfile:{},
}

export default (state =INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_SIGNIN:
      return {
        ...state,
        isSignIn: action.payload
      };
    case SIGNIN:
      return {
        ...state,
        isSignIn: action.payload
      };
      case SIGNOUT:
      return {
        ...state,
        isSignIn: action.payload,
        userId:null,
        userProfile:{}
      };
      case USER_ID:
      return {
        ...state,
        userId: action.payload
      };
      case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };

      case AUTH:
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
};
