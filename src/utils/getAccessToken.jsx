import axios from 'axios';

import { REFRESH_TOKEN_URL } from '../constants';

const getAccessToken = (authURL, setAuthentication) =>
  axios
    .get(authURL + REFRESH_TOKEN_URL, { withCredentials: true })
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message);
      }

      const { user, user_permissions, accessToken } = res.data.data;

      setAuthentication(prev => ({
        ...prev,
        isInitialized: true,
        user: {
          ...user,
          user_permissions,
        },
        accessToken,
      }));
    })
    .catch(err => {
      console.log('DFS Auth Error : ', err.message);

      setAuthentication(prev => ({
        ...prev,
        isInitialized: true,
      }));
    });

export { getAccessToken };
