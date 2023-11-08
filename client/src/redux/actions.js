import axios from "../api/api";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post("/users/login", { username, password });
    const token = response.data.token;
    console.log(token);
    // Save the token in Redux state or local storage
    // For example: dispatch({ type: 'LOGIN_SUCCESS', payload: token });
    // You should also decode and verify the token to get user information
    //     const user = jwt.decode(token);
    // Dispatch user information to Redux state
    // For example: dispatch({ type: 'SET_USER', payload: user });
  } catch (error) {
    // Handle login error
  }
};
export const register = () => {};
