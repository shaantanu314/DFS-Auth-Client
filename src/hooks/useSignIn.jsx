import { useAuth } from "./useAuth";
import { signIn } from "../utils/signIn";

export const useSignIn = () => {
  const authentication = useAuth();

  return (creds) => {
    signIn({ authentication, creds });
  };
};
