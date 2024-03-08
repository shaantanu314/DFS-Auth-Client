import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const authentication = useContext(AuthContext);

  return authentication;
};
