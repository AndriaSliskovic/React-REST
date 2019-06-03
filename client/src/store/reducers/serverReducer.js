export default (state = [], action) => {
    switch (action.type) {     
      case 'RESPONSE':
        return action.payload;
      default:
        return state;
    }
  };