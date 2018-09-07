export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
};

const initialState = {
  login: {
    loading: false,
  },
};

export default function auth(state = initialState, action) {
  switch (action) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case Types.LOGIN_SUCCES:
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
};
