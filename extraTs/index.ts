import { users } from './constants';
import { diamond, equilateral } from './patterns';
import { hasPermission, validateUsers } from './utils';

console.log(diamond(5));
console.log(equilateral(5));
console.log(hasPermission('getUsers', 'trainer', 'write'));
validateUsers(users);
