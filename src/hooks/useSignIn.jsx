import { useAuth } from './useAuth';
import { signIn } from '../utils/signIn';

export const useSignIn = () => {
  const authentication = useAuth();

  return creds => {
    return signIn({ authentication, creds });
  };
};
