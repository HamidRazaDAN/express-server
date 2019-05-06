interface IEmail {
  reviewerEmail: string;
  traineeEmail: string;
}

interface IPermission {
  [user: string]: {
    all: string[];
    delete: string[];
    read: string[];
    write: string[];
  };
}

export { IEmail, IPermission };
