import {mainSettings} from '../../data/login/settings';

import {
  SETTINGS,
  IS_SIGNIN,
  SIGNIN,
  SIGNOUT,
  USER_ID,
  USER_PROFILE,
  AUTH,
  ADMIN
} from './types';


export const settings=()=>{
    return{
      type:SETTINGS,
      payload:mainSettings
    }
  }

  export const isSignIn=(logovan)=>{
    return{
      type:IS_SIGNIN,
      payload:logovan
    }
  }

  export const signIn=()=>{
    return{
      type:SIGNIN,
      payload:true
    }
  }

  export const signOut=()=>{
    return{
      type:SIGNOUT,
      payload:false
    }
  }

  export const userId=(id)=>{
    return{
      type:USER_ID,
      payload:id
    }
  }

  export const userProfile=(profile)=>{

    return{
      type:USER_PROFILE,
      payload:profile
    }
  }

  export const authAction=(authObject)=>{
    return{
      type:AUTH,
      payload:authObject
    }
  }

  export const adminAction=()=>{
    return{
      type:ADMIN,
      payload:true
    }
  }

  export const notAdminAction=()=>{
    return{
      type:ADMIN,
      payload:false
    }
  }



