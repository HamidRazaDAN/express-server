import { permissions } from "../constants";

export default function hasPermission(moduleName: string, role: string, permissionType: string) {
  const ALL: string = 'all';
  if (permissions[moduleName] && (permissions[moduleName][ALL].includes(role) ||
    permissions[moduleName][permissionType].includes(role))) {
    return true;
  } else {
    return false;
  }
}
