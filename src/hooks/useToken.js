import { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../redux/auth';

const useToken = () => {
  const tokenState = useSelector(selectAuthToken);

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const setToken = useCallback(
    (token) => {
      setCookie('token', token);
    },
    [setCookie]
  );

  const removeToken = useCallback(() => {
    removeCookie('token');
  }, [removeCookie]);

  useEffect(() => {
    if (tokenState) {
      setToken(tokenState);
    }
  }, [setToken, tokenState]);

  return {
    token: tokenState || cookies['token'],
    setToken,
    removeToken,
  };
};

export default useToken;
