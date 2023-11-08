const initialState = {
  token: "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    _id:""
  },
  todo: {
    id: "",
    toDoContent: "",
    toDoHeading: "",
    date: "",
  },
  snackbar: {
    open: false,
    message: "",
    type: "",
  },
};

export const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "USER_TOKEN": {
      return { ...state, token: payload };
    }
    case "SET_CURRENT_USER": {
      return { ...state, user: payload };
     

    }
    case "OPEN_CLOSE_SNACKBAR_NOTIFICATION": {
      return {
        ...state,
        snackbar: {
          open: payload.open,
          message: payload.message,
          type: payload.type,
        },
      };
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
