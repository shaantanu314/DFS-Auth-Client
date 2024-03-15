import { useAuth } from './useAuth';

import { ADMIN_ROLE, SUPER_ADMIN_ROLE } from '../constants';

export const usePermissions = () => {
  const { user } = useAuth();

  return {
    isAdmin: user.user_permissions.includes(ADMIN_ROLE),
    isSuperAdmin: user.user_permissions.includes(SUPER_ADMIN_ROLE),
  };
};
