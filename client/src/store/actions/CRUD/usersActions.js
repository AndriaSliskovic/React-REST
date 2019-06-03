import {mainSettings} from '../../../data/mainSettings/settings'
import serverJson from '../../../apis/serverJson';
import localhost from '../../../apis/lacalhost';
import serverAnsli from '../../../apis/serverAnsli';

import history from '../../../history';

import {
  SETTINGS,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
  SELECTED_USER,
  ERROR,
  RESPONSE
} from '../types';

export const settingsAction=(page)=>{
    switch (page) {
      case "CREATE":
      return{
        type:SETTINGS,
        payload:mainSettings.crud.create
      }
      case "EDIT":
        return{
          type:SETTINGS,
          payload:mainSettings.crud.edit
        }
        case "LIST":
          return{
            type:SETTINGS,
            payload:mainSettings.crud.list
          }
    
      default:
        break;
    }

  }

  //Helper za hendlovanje odgovora sa servera
const serverResponse=(response, dispatch)=>{
  if (!response) {
    return dispatch({type:RESPONSE,payload:false});
  }else if(response.status===200){
    dispatch({type:RESPONSE,payload:true});
  }else{
    return dispatch({type:RESPONSE,payload:false});
  }
}

// export const createUserAction=(formValues)=>{  
//     return async (dispatch,getState)=>{
//       const {userId}=getState().login;
//       const request= await localhost.post('/users', {...formValues,userId});    
//       dispatch({type:CREATE_USER,payload:request.data.data});
//       // Programirana navigacija na odredjenu rutu
//       history.push('/users/list');
//     }
// }

export const createUserAction=(formValues)=>{  
  return async (dispatch,getState)=>{
    const {userId}=getState().login;
    await localhost.post('/users', {...formValues,userId})
    .then((request)=>{
      dispatch({type:CREATE_USER,payload:request.data.data});
      // Programirana navigacija na odredjenu rutu
      history.push('/users/list');
    })
    .catch(
      function (error) {
        // handle error
        console.log(error);
        dispatch({type:ERROR,payload:error});
      }); 
  }
}

export const fetchUsersAction=(serverType)=>{  
  return async (dispatch)=>{
    await serverType.get('/users')
    .then((response)=>{
      dispatch({type:RESPONSE,payload:true});
      dispatch({type:FETCH_USERS,payload:response.data.data});
      history.push('/users/list');      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return dispatch({type:ERROR,payload:error});
    });
  }
}
export const fetchUserAction=(id)=>{  
  return async (dispatch)=>{
    const response= await serverJson.get(`/users/${id}`);
    dispatch({type:FETCH_USER,payload:response.data.data})
  }
}

export const editUserAction=(id,formValues)=>{  
  return async (dispatch)=>{
    const response= await localhost.patch(`/users/${id}`,formValues)
    .then((response)=>{
      dispatch({type:EDIT_USER,payload:response.data.data});
      history.push('/users/list'); 
    })
    .catch(
      (error)=>dispatch({type:ERROR,payload:error})
    )
    ;
   
  }
}

export const deleteUserAction=(id)=>{  
  return async (dispatch)=>{
    // Ne treba resposnse za delete
    await localhost.delete(`/users/${id}`);
    dispatch({type:DELETE_USER,payload:id})
  }
}

export const selectedUser=(id)=>{
  return{
    type:SELECTED_USER,
    payload:id
  }
}
