import {
  GET_USER_INFO,
  GET_USER_INFO_FAILED,
  GET_USER_INFO_SUCESSFULLY,
  SIGN_IN,
  SIGN_IN_FAILED,
  SIGN_IN_SUCESSFULLY,
  SIGN_OUT,
} from './auth.action';
import update from 'immutability-helper';

const INITIAL_STATE = {
  loading: false,
  error: null,
  user: null,
  token: null,
};

const auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return update(state, { $merge: { loading: true, error: null } });

    case SIGN_IN_SUCESSFULLY:
      return update(state, {
        $merge: { loading: false, user: payload.user, token: payload.token },
      });
    case GET_USER_INFO_FAILED:
    case SIGN_IN_FAILED:
      return update(state, {
        $merge: { loading: false, user: null, token: null, error: payload },
      });
    case SIGN_OUT:
      return update(state, {
        $merge: {
          user: null,
          token: null,
        },
      });

    case GET_USER_INFO:
      return update(state, {
        $merge: { loading: true, error: null, token: payload.token },
      });
    case GET_USER_INFO_SUCESSFULLY:
      return update(state, {
        $merge: { loading: false, user: payload },
      });
    default:
      return state;
  }
};

export { auth };
