import { permissions } from '../constants';

export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
  const ALL: string = 'all';
  if (permissions[moduleName] && (permissions[moduleName][permissionType].includes(role)
  || permissions[moduleName][ALL].includes(role))) {
    return true;
  } else {
    return false;
  }
}
