import { IPermission } from './interfaces';

const TRAINEE_MODULE: string = 'traineeModule';
const USER_MODULE: string = 'userModule';
const HEAD_TRAINER: string = 'head-trainer';
const TRAINER: string = 'trainer';
const TRAINEE: string = 'trainee';

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

export { permissions, TRAINEE_MODULE, USER_MODULE };
