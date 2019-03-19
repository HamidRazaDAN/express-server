import { IPermission } from './interfaces';

const TRAINEE_MODULE: string = 'trainee';
const USER_MODULE: string = 'user';
const HEAD_TRAINER: string = 'head-trainer';
const TRAINER: string = 'trainer';
const TRAINEE: string = 'trainee';
const READ: string = 'read';
const WRITE: string = 'write';
const DELETE: string = 'delete';

const permissions: IPermission = {
  [TRAINEE_MODULE]: {
    all: [HEAD_TRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
  },

  [USER_MODULE]: {
    all: [HEAD_TRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
  },
};

export { permissions, TRAINEE_MODULE, USER_MODULE, READ, WRITE, DELETE };
