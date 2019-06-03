export const settingsReducer= (state = [], action) => {
    switch (action.type) {     
      case 'SETTINGS':
        return action.payload;
      default:
        return state;
    }
  };