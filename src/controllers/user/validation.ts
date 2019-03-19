const userValidation = {
  create: {
    email: {
      in: ['body'],
      regex: /^([A-Za-z0-9 \-\.])+\@(successive.tech)/,
      required: true,
      string: true,
    },

    name: {
      in: ['body'],
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      required: true,
    },

    password: {
      in: ['body'],
      required: true,
      string: true,
    },

    role: {
      in: ['body'],
      required: true,
      string: true,
    },
  },

  delete: {
    id: {
      in: ['params'],
      required: true,
    },
  },

  get: {
    id: {
      in: ['params'],
      required: true,
      string: true,
    },
  },

  getList: {
    limit: {
      default: 5,
      in: ['query'],
      number: true,
      required: false,
    },

    skip: {
      default: 0,
      in: ['query'],
      number: true,
      required: false,
    },
  },

  login: {
    email: {
      in: ['body'],
      regex: /^([A-Za-z0-9 \-\.])+\@(successive.tech)/,
      required: true,
      string: true,
    },

    password: {
      in: ['body'],
      required: true,
      string: true,
    },
  },

  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
    },

    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};

export default userValidation;
