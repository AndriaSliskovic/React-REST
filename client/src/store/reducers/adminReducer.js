
export default (state =null, action) => {
    switch (action.type) {
        case 'ADMIN':
            return action.payload
            
      default:
        return state;
    }
  };
  