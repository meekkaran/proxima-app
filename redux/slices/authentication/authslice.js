import { createSlice } from "@reduxjs/toolkit";
import { showMessage, hideMessage } from "../../slices/message";
import { signup, login, logout } from "../../axios";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    signupStart: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    signupFailure: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    setLogout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  setLogout,
} = authSlice.actions;

export const loginUser = (data) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await login(data);
    localStorage.setItem("token", response.token);
    dispatch(loginSuccess(response));
    dispatch(hideMessage());
  } catch (err) {
    dispatch(loginFailure());
    dispatch(showMessage({ type: "error", message: err.message }));
  }
};

export const signupUser = (data) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const response = await signup(data);
    localStorage.setItem("token", response.token);
    dispatch(signupSuccess(response));
    dispatch(hideMessage());
  } catch (err) {
    dispatch(signupFailure());
    dispatch(showMessage({ type: "error", message: err.message }));
  }
};

//* refactor on production
// export const loginUser = (data) => async (dispatch) => {
//   dispatch(loginStart());
//   try {
//     const response = await login(data);
//     localStorage.setItem("token", response.token);
//     dispatch(loginSuccess(response));
//     dispatch(hideMessage());
//     const router = useRouter();
//     router.push("/home");
//   } catch (err) {
//     dispatch(loginFailure());
//     // dispatch(showMessage({ type: "error", message: err.message }));
//   }
// };

// export const signupUser = (data) => async (dispatch) => {
//   dispatch(signupStart());
//   try {
//     const response = await signup(data);
//     localStorage.setItem("token", response.token);
//     dispatch(signupSuccess(response));
//     dispatch(hideMessage());
//     const router = useRouter();
//     router.push("/home");
//   } catch (err) {
//     dispatch(signupFailure());
//     dispatch(showMessage({ type: "error", message: err.message }));
//   }
// };

// export const logoutUser = () => async (dispatch) => {
//   try {
//     await logout();
//     localStorage.removeItem("token");
//     dispatch(setLogout());
//     dispatch(hideMessage());
//     const router = useRouter();
//     router.push("/");
//   } catch (err) {
//     dispatch(showMessage({ type: "error", message: err.message }));
//   }
// };

//Selectors for grabbing information fom the data layer
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
// export const selectUserData = (state) => state.auth.user_data

export default authSlice.reducer;
