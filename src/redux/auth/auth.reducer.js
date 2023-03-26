import {
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
    default:
      return state;
  }
};

export { auth };
