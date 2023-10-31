import axios from 'axios';

const initialState = {
  token: null,
  user: null,
};

/* Manage success login */
export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { token },
});

/* Manage success signup */
export const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS',
});

/* Manage success logout */
export const logoutSuccess = () => ({
  type: 'LOGOUT',
});

/* API Url */
const url = 'https://parachute-back-end.onrender.com/';

/* Login request */
export const loginApi = (username) => async (dispatch) => {
  const requestBody = {
    user: {
      username
    },
  };

  try {
    const response = await axios.post(`${url}login`, requestBody);
    const authorizationHeader = response.headers.authorization;
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      dispatch(loginSuccess(token));
      localStorage.setItem('tokenKey', token);
    }
  } catch (error) {
    throw new Error(error);
  }
};

/* Signup request */
export const signup = ({ username, role }) => async () => {
  const requestBody = {
    user: {
      username,
      role,
    },
  };
  try {
    const response = await axios.post(`${url}users`, requestBody);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

/* Reducer */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
