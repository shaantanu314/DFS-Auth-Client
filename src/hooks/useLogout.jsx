import { useAuth } from './useAuth';
import { logout } from '../utils/logout';

export const useLogout = () => {
  const { authURL, setAuthentication } = useAuth();

  return () => {
    return logout({ authURL, setAuthentication });
  };
};
