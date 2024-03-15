import { useAuth } from './useAuth';
import { signUp } from '../utils/signUp';

export const useSignUp = () => {
  const authentication = useAuth();

  return userDetails => {
    return signUp({ authentication, userDetails });
  };
};
