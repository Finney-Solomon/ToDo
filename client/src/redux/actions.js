import axios from "../api/api";

export const setCurrentUser = (payload) => {
  return {
    type: "SET_CURRENT_USER",
    payload,
  };
};
export const userExist = (payload) => {
  return {
    type: "USER_EXIST",
    payload,
  };
};
export const openCloseSnackbarNotification = (payload) => {
  return {
    type: "OPEN_CLOSE_SNACKBAR_NOTIFICATION",
    payload,
  };
};

export const saveTodoTileList = (payload) => {
  return {
    type: "SAVE_TODO_TITLE_LIST",
    payload,
  };
};

export const getSelectedTodo = (payload) => {
  return {
    type: "GET_SELECTED_TODO_DATE",
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: "UPDATE_TODO_DATE",
    payload,
  };
};
export const addNewTodo = (payload) => {
  return {
    type: "ADD_NEW_TODO",
    payload,
  };
};

export const resetReduxData = (payload) => {
  return {
    type: "RESET_REDUX_DATA",
    payload,
  };
};

export const login = (username, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("/users/login", { username, password });
    const data = response.data;
    localStorage.setItem("x-auth-token", data.token);
    console.log(localStorage,"localStorage")
    if (response.data.success) {
      dispatch(userExist(true));
      dispatch(setCurrentUser(data.userDetails));
      const notification = {
        type: "success",
        message: "Login Successful",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
      navigate("/");
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Invalid Credentials",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Invalid Credentials",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};
export const register = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("/users/register", { ...payload });
    if (response.data.success) {
      const notification = {
        type: "success",
        message: "Registered Successful",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));

      navigate("/login");
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Register Failed",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch {
    const notification = {
      type: "error",
      message: "Register Failed",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};

export const getTodoTitleList = () => async (dispatch) => {
  try {
    const response = await axios.get("/todo/titleList");
    const data = response.data;

    if (response.data.success) {
      dispatch(saveTodoTileList(data.todo));
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Unable to Get Todo Title List",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Something went Wrong",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};

export const getSelectTodoData = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/todo/selectedTodo", {
      payload,
    });
    const data = response.data;

    if (response.data.success) {
      dispatch(getSelectedTodo(data.todo));
      const notification = {
        type: "success",
        message: "Get Data Successful",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Unable to Get Todo Title List",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Something went Wrong",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};
export const updateSelectedTodoData = (payload) => async (dispatch) => {
  try {
    const response = await axios.put(`/todo/${payload._id}`, {
      payload,
    });
    const data = response.data;

    if (response.data.success) {
      dispatch(getSelectedTodo(data.todo));
      const notification = {
        type: "success",
        message: "Todo Updated Successfully",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Unable to Get Todo Title List",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Something went Wrong",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};

export const addTodo = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(`/todo/addNew`, {
      payload,
    });
    const data = response.data;

    if (response.data.success) {
      dispatch(getSelectedTodo(data.todo));
      const notification = {
        type: "success",
        message: "Todo Updated Successfully",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
      dispatch(addNewTodo(false));
      dispatch(getTodoTitleList());
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Unable to Get Todo Title List",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Something went Wrong",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};
export const deleteTodo = (payload) => async (dispatch) => {
  try {
    const response = await axios.delete(`/todo/${payload}`);
    const data = response.data;

    if (response.data.success) {
      dispatch(getSelectedTodo(data.todo));
      const notification = {
        type: "success",
        message: "Deleted Successfully",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
      dispatch(addNewTodo(true));
      dispatch(getTodoTitleList());
      dispatch(
        getSelectedTodo({
          id: "",
          title: "",
          description: "",
          date: "",
          user: "",
        })
      );
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Unable to Get Todo Title List",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Something went Wrong",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`/users/logout`);
    const data = response.data;

    if (response.data.success) {
      dispatch(getSelectedTodo(data.todo));
      const notification = {
        type: "success",
        message: "User Logout Successful",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
      navigate("/login");
      localStorage.removeItem("x-auth-token");
      dispatch(resetReduxData());
      dispatch(userExist(false));
    } else if (response.data.message.length !== 0) {
      const notification = {
        type: "success",
        message: response.data.message,
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    } else {
      const notification = {
        type: "error",
        message: "Something Went Wrong",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
    }
  } catch (error) {
    const notification = {
      type: "error",
      message: "Something went Wrong",
      open: true,
    };
    dispatch(openCloseSnackbarNotification(notification));
  }
};
