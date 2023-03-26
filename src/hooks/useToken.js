import { useCallback } from 'react';
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

  return {
    token: tokenState || cookies['token'],
    setToken,
    removeToken,
  };
};

export default useToken;
