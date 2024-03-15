import { useState } from 'react';
import { useMount, useUpdateEffect } from 'react-use';
import { jwtDecode } from 'jwt-decode';

import { getAccessToken } from '../../utils';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children, authURL }) => {
  const [authentication, setAuthentication] = useState({
    isInitialized: false,
    authURL,
  });

  // This will be the initial call on mounting to get the access token
  useMount(() => {
    getAccessToken(authURL, setAuthentication);
  });

  useUpdateEffect(() => {
    const { expires_at } = jwtDecode(authentication.accessToken),
      expiryTimeLeft = expires_at - Date.now();

    setTimeout(() => {
      getAccessToken(authURL, setAuthentication);
    }, [expiryTimeLeft]);
  }, [authentication.accessToken]);

  return authentication.isInitialized ? (
    <AuthContext.Provider value={{ ...authentication, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  ) : null;
};
