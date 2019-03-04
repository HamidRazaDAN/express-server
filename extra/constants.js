const GET_USER = "getUsers";
const HEAD_TRAINER = "head-trainer";
const TRAINER = "trainer";
const TRAINEE = "trainee";

export const permissions = {
  [GET_USER]: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
