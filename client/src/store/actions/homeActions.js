import {mainSettings} from '../../data/mainSettings/settings'

export const settingsAction=()=>{
    return{
      type:'SETTINGS',
      payload:mainSettings.homePage
    }
  }