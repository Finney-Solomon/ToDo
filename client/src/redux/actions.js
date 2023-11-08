
import axios from "../api/api";



export const setCurrentUser = (payload) => {
  return {
    type: "SET_CURRENT_USER",
    payload,
  };
};
export const userToken = (payload) => {
  return {
    type: "USER_TOKEN",
    payload,
  };
};
export const openCloseSnackbarNotification = (payload) => {
  return {
    type: "OPEN_CLOSE_SNACKBAR_NOTIFICATION",
    payload,
  };
};

export const login = (username, password,navigate) => async (dispatch) => {


  try {
    const response = await axios.post("/users/login", { username, password });
    const data = response.data;

    if (response.data.success) {
      dispatch(userToken(data.token));
      // <Route path="/TodoIndex"/>
    
      dispatch(setCurrentUser(data.userDetails));
      const notification = {
        type: "success",
        message: "Login Successful",
        open: true,
      };
      dispatch(openCloseSnackbarNotification(notification));
       // Redirect to the "/TodoIndex" route
      //  window.location.href = '/todoIndex';
    
       navigate("/todoIndex")
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
export const register = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/users/register", { ...payload });
    const token = response.data;
    alert(token.userDetails);
  } catch {}
};
