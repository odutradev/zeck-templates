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

export const setSpaceToken = (space?: string) => {
  if (space) {
    localStorage.setItem('space', space);
    api.defaults.headers.common['space'] = space;
  } else {
    localStorage.removeItem('space');
    delete api.defaults.headers.common['space'];
  }
};