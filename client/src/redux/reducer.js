const initialState = {
  token: "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
  },
  todo: {
    id: "",
    toDoContent: "",
    toDoHeading: "",
    date: "",
  },
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_SIGN_UP_PAGE": {
      return {
        ...state,
        signUpPage: payload,
        timer: false,
      };
      break;
    }
    default:
      break;
  }
};
