import { IEmail, IPermission } from './interfaces';

const GET_USER: string = 'getUsers';
const HEAD_TRAINER: string = 'head-trainer';
const TRAINER: string = 'trainer';
const TRAINEE: string = 'trainee';

const permissions: IPermission = {
  [GET_USER]: {
    all: [HEAD_TRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
  },
};

const users: IEmail[] = [
  {
    reviewerEmail: 'reviewer1@successive.tech',
    traineeEmail: 'trainee1@successive.tech',
  },

  {
    reviewerEmail: 'reviewer1@successive.tech',
    traineeEmail: 'trainee1@successive.tech',
  },

  {
    reviewerEmail: 'reviewer1@successive.tech',
    traineeEmail: 'trainee1@successive.tec',
  },
];

export { permissions, users };
