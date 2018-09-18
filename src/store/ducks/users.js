export const Types = {
  GET_REQUEST: 'users/GET_REQUEST',
  GET_SUCCESS: 'users/GET_SUCCESS',
  GET_FAILURE: 'users/GET_FAILURE',

  GET_LIST_REQUEST: 'users/GET_LIST_REQUEST',
  GET_LIST_SUCCESS: 'users/GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'users/GET_LIST_FAILURE',

  CREATE_REQUEST: 'users/CREATE_REQUEST',
  CREATE_SUCCESS: 'users/CREATE_SUCCESS',
  CREATE_FAILURE: 'users/CREATE_FAILURE',

  EDIT_REQUEST: 'users/EDIT_REQUEST',
  EDIT_SUCCESS: 'users/EDIT_SUCCESS',
  EDIT_FAILURE: 'users/EDIT_FAILURE',

  DELETE_REQUEST: 'users/DELETE_REQUEST',
  DELETE_SUCCESS: 'users/DELETE_SUCCESS',
  DELETE_FAILURE: 'users/DELETE_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  page: 1,
  totals: 1,

  detail: {
    data: {},
    loading: false,
  },

  create: {
    loading: false,
  },

  edit: {
    loading: false,
  },
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true,
        },
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          data: action.payload.user.data,
        },
      };
    case Types.GET_FAILIRE:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
        },
      };
    case Types.GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_LIST_SUCCESS:
      console.log(action.payload.users);
      return {
        ...state,
        loading: false,
        data: action.payload.users.data,
        page: action.payload.users.page,
        total: action.payload.users.total_pages,
      };
    case Types.GET_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case Types.CREATE_REQUEST:
      return {
        ...state,
        create: {
          ...state.create,
          loading: true,
        },
      };
    case Types.CREATE_SUCCESS:
      return {
        ...state,
        create: {
          ...state.create,
          loading: false,
        },
      };
    case Types.CREATE_FAILURE:
      return {
        ...state,
        create: {
          ...state.create,
          loading: false,
        },
      };
    case Types.EDIT_REQUEST:
      return {
        ...state,
        edit: {
          ...state.edit,
          loading: true,
        },
      };
    case Types.EDIT_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          loading: false,
        },
      };
    case Types.EDIT_FAILURE:
      return {
        ...state,
        edit: {
          ...state.edit,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  getUserRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getUserSuccess: user => ({
    type: Types.GET_SUCCESS,
    payload: { user },
  }),

  getUserFailure: () => ({
    type: Types.GET_FAILURE,
  }),

  getUsersListRequest: (page = null) => ({
    type: Types.GET_LIST_REQUEST,
    payload: { page },
  }),

  getUsersListSuccess: users => ({
    type: Types.GET_LIST_SUCCESS,
    payload: { users },
  }),

  getUsersListFailure: () => ({
    type: Types.GET_LIST_FAILURE,
  }),

  createUserRequest: data => ({
    type: Types.CREATE_REQUEST,
    payload: { data },
  }),

  createUserSuccess: () => ({
    type: Types.CREATE_SUCCESS,
  }),

  createUserFailure: () => ({
    type: Types.CREATE_FAILURE,
  }),

  editUserRequest: (id, data) => ({
    type: Types.EDIT_REQUEST,
    payload: { id, data },
  }),

  editUserSuccess: () => ({
    type: Types.EDIT_SUCCESS,
  }),

  editUserFailure: () => ({
    type: Types.EDIT_FAILURE,
  }),
};
