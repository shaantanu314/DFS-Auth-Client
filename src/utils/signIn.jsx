import axios from 'axios';

import { LOGIN_URL } from '../constants';

export const signIn = ({ authentication, creds }) => {
  if (authentication?.user || authentication?.accessToken) {
    return null;
  }

  /*
    creds should be an object having 
    {
        user_email: email id of the user,
        user_password: password of the user
    }
  */
  return axios
    .post(authentication.authURL + LOGIN_URL, creds, { withCredentials: true })
    .then(res => {
      if (res.status === 200) {
        authentication.setAuthentication(prev => ({
          ...prev,
          user: res.data.data.user,
          accessToken: res.data.data.accessToken,
        }));
      }
    })
    .catch(err => {
      console.log('DFS Auth Error :: ', err.message);

      authentication.setAuthentication(prev => ({
        ...prev,
        user: undefined,
        accessToken: undefined,
      }));

      throw new Error(err.message);
    });
};
