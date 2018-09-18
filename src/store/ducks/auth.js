export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',

  LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'auth/LOGOUT_FAILURE',

  GET_USER_REQUEST: 'auth/GET_USER_REQUEST',
  GET_USER_SUCCESS: 'auth/GET_USER_SUCCESS',
  GET_USER_FAILURE: 'auth/GET_USER_FAILURE',
};

const initialState = {
  login: {
    loading: false,
  },

  logout: {
    loading: false,
  },

  user: {
    data: {},
    loading: false,
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
        },
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
        },
      };
    case Types.GET_USER_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case Types.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          data: action.payload.user.data,
        },
      };
    case Types.GET_USER_FAILURE:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
        },
      };
    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: true,
        },
      };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: false,
        },
      };
    case Types.LOGOUT_FAILURE:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: credentials => ({
    type: Types.LOGIN_REQUEST,
    payload: { credentials },
  }),

  loginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),

  loginFailure: () => ({
    type: Types.LOGIN_FAILURE,
  }),

  getAuthUserRequest: credentials => ({
    type: Types.GET_USER_REQUEST,
    payload: { credentials },
  }),

  getAuthUserSuccess: user => ({
    type: Types.GET_USER_SUCCESS,
    payload: { user },
  }),

  getAuthUserFailure: () => ({
    type: Types.GET_USER_FAILURE,
  }),

  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST,
  }),

  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
  }),

  logoutFailure: () => ({
    type: Types.LOGOUT_FAILURE,
  }),
};
