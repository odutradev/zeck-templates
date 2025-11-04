import api from "@utils/functions/api";

export const setAuthToken = (token?: string) => {
  if (token) {
    localStorage.setItem('token', token);
    api.defaults.headers.common['authorization'] = token;
  } else {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['authorization'];
  }
};