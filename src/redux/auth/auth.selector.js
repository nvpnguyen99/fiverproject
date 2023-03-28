import { createSelector } from 'reselect';

export const selectAuth = (state) => state.auth;

export const selectAuthLoading = createSelector(
  selectAuth,
  (auth) => auth.loading
);

export const selectAuthError = createSelector(selectAuth, (auth) => auth.error);

export const selectAuthUser = createSelector(selectAuth, (auth) => auth.user);

export const selectAuthToken = createSelector(selectAuth, (auth) => auth.token);
