const INITIAL_STATE = {
  isOpen: false,
  title: "",
  body: ""
};

export default (state = INITIAL_STATE, action) => {
    
  switch (action.type) {
    case "MODAL_OPEN":
      return {
        ...state,  
        isOpen: true,
        title: action.payload.title,
        body: action.payload.body,
        buttonSubmit:action.payload.buttonSubmit,
        buttonClose:action.payload.buttonClose
      };
    case "MODAL_CLOSE":
      return { isOpen: false };
    default:
      return state;
  }
};
