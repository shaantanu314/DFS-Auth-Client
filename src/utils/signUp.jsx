import axios from 'axios';

import { REGISTRATION_URL } from '../constants';

export const signUp = ({ authentication, userDetails }) => {
  if (!userDetails) {
    return null;
  }

  const { user_email, user_password, username, first_name, last_name } =
    userDetails;

  if (!user_email || !user_password || !username || !first_name || !last_name) {
    return null;
  }

  return axios
    .post(authentication.authURL + REGISTRATION_URL, userDetails, {
      withCredentials: true,
    })
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message);
      }
      return res.data;
    });
};
