import axios from 'axios';

import { LOGOUT_URL } from '../constants';

export const logout = ({ authURL, setAuthentication }) =>
  axios
    .get(authURL + LOGOUT_URL, { withCredentials: true })
    .then(res => {
      if (res.status === 200) {
        setAuthentication(prev => ({
          ...prev,
          user: undefined,
          accessToken: undefined,
        }));
      }
    })
    .catch(err => {
      console.log('DFS Auth Error : ', err.message);
    });
