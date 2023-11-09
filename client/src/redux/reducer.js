const initialState = {
  userExist: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    _id: "",
  },

  todo: {
    isNew: true,
    todoTitleList: [],
    selectedTodo: {
      id: "",
      title: "Daily Mastery Blueprint",
      description:
        "Unleash your potential by strategically mapping out your day with this comprehensive blueprint. From tackling important work assignments to ensuring self-care rituals, this guide will help you navigate each day with purpose and efficiency. Take charge of your schedule and witness the transformation of your daily routine into a well-orchestrated symphony of accomplishments.",
      date: "",
      user: "",
    },
  },
  snackbar: {
    open: false,
    message: "",
    type: "info",
  },
};

export const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "USER_EXIST": {
      return { ...state, userExist: payload };
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
    case "SAVE_TODO_TITLE_LIST": {
      return {
        ...state,
        todo: {
          ...state.todo,
          todoTitleList: payload,
        },
      };
    }
    case "GET_SELECTED_TODO_DATE": {
      return {
        ...state,
        todo: {
          ...state.todo,
          selectedTodo: { ...payload },
        },
      };
    }
    case "UPDATE_TODO_DATE":
      return {
        ...state,
        todo: {
          ...state.todo,
          selectedTodo: {
            ...state.todo.selectedTodo,
            ...payload,
          },
        },
      };

    case "ADD_NEW_TODO": {
      return {
        ...state,
        todo: {
          ...state.todo,
          isNew: payload,
        },
      };
    }
    case "RESET_REDUX_DATA": {
      return {
        userExist: false,
        user: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          username: "",
          _id: "",
        },

        todo: {
          isNew: true,
          todoTitleList: [],
          selectedTodo: {
            id: "",
            title: "Daily Mastery Blueprint",
            description:
              "Unleash your potential by strategically mapping out your day with this comprehensive blueprint. From tackling important work assignments to ensuring self-care rituals, this guide will help you navigate each day with purpose and efficiency. Take charge of your schedule and witness the transformation of your daily routine into a well-orchestrated symphony of accomplishments.",
            date: "",
            user: "",
          },
        },
        snackbar: {
          open: false,
          message: "",
          type: "info",
        },
      };
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
