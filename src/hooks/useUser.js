import { useDispatch, useSelector } from 'react-redux';
import {
  doGetUserInfo,
  selectAuthError,
  selectAuthLoading,
  selectAuthUser,
} from '../redux/auth';
import { useCookies } from 'react-cookie';
import { useEffect, useRef, useState } from 'react';
import useToken from './useToken';

const useUser = (fetchUser) => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const loading = useSelector(selectAuthLoading);
  const [isFetching, setFetching] = useState(true);
  const loadingRef = useRef(loading);
  const error = useSelector(selectAuthError);

  const { token } = useToken();
  const [cookies] = useCookies(['loginId']);
  const loginId = cookies['loginId'];

  useEffect(() => {
    if (loadingRef.current && !loading) {
      loadingRef.current = false;
      setFetching(false);
    }
  }, [loading]);

  useEffect(() => {
    if (user || !loginId) {
      setFetching(false);
      return;
    }

    if (!fetchUser) {
      setFetching(false);
      return;
    }

    loadingRef.current = true;
    dispatch(doGetUserInfo({ token, loginId }));
  }, [loginId, user, dispatch, token, fetchUser]);

  return { user, loading, isFetching, error };
};

export default useUser;
