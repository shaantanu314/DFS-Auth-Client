import { useState, useMount, useUpdateEffect } from "react";
import jwt from "jsonwebtoken";

import { getAccessToken } from "../../utils";

import { AuthContext } from "./AuthContext";

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
    const { expires_at } = jwt.decode(accessToken),
      expiryTimeLeft = expires_at - Date.now();

    setTimeout(() => {
      getAccessToken(authURL, setAuthentication);
    }, [expiryTimeLeft]);
  }, [authentication.accessToken]);

  return (
    <AuthContext.Provider value={{ ...authentication, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
