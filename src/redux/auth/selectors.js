export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.selectIsloading;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;
