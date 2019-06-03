import {
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
  SELECTED_USER
} from "../actions/types";

import _ from 'lodash';
import { selectedUser } from "../actions/CRUD/usersActions";

export default (state = {}, actions) => {
  switch (actions.type) {
    case FETCH_USERS:
    return { ...state, ..._.mapKeys(actions.payload,'id')};
    case FETCH_USER:
      // Trazi key u state objektu koji odgovara actions.payload.id i setuje novu vrednost koja mu je poslata
      return { ...state, [actions.payload.id]: actions.payload };
    case CREATE_USER:
      return { ...state, [actions.payload.id]: actions.payload };
      case EDIT_USER:
      return { ...state, [actions.payload.id]: actions.payload };
      case DELETE_USER:
      return _.omit(state,actions.payload);   
      case SELECTED_USER:
        return {...state,selectedUser:actions.payload.id}
    default:
      return state;
  }
};
