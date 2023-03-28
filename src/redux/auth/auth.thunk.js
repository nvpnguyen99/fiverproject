import * as authActions from './auth.action';
import { AuthApi, NguoiDungApi } from '../../http-access';
import { TOKEN_CYBERSOFT } from '../../util/settings/config';

export const doSignIn = (email, password) => async (dispatch) => {
  dispatch(authActions.signIn());

  try {
    const res = await new AuthApi().dangNhap(TOKEN_CYBERSOFT, {
      model: email,
      password,
    });
    dispatch(authActions.signInSuccessfully(res.content));
  } catch (error) {
    dispatch(authActions.signInFailed(error));
  }
};

export const doGetUserInfo =
  ({ token, loginId }) =>
  async (dispatch) => {
    dispatch(authActions.getUserInfo({ token, loginId }));

    try {
      const res = await new NguoiDungApi().get_0(
        loginId,
        TOKEN_CYBERSOFT,
        token
      );
      dispatch(authActions.getUserInfoSuccessfully(res.content));
    } catch (error) {
      dispatch(authActions.getUserInfoFailed(error));
    }
  };
