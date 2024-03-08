import { useAuth } from "./useAuth";
import { logout } from "../utils/logout";

export const useLogout = () => {
  const { authUrl, setAuthentication } = useAuth();

  return () => {
    logout({ authUrl, setAuthentication });
  };
};
