let permissions = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName] && permissions[moduleName][permissionType].includes(role)) {
    return true;
  } else {
    return false;
  }
}

console.log(hasPermission('getUsers', 'trainer', 'read'));
