const validation = {
  create: {
    id: {
      in: ['body'],
      required: true,
      string: true,
      // custom: function(value) {
      //   throw {
      //     error: 'Error Occurred',
      //     message: 'Message'
      //   }
      // },
    },
    name: {
      in: ['body'],
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      required: true,
    },
  },
  delete: {
    id: {
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 20,
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 10,
      in: ['query'],
      number: true,
      required: false,
    },
  },
  read: {
    id: {
      in: ['params'],
      required: true,
      string: true,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
      // custom(dataToUpdate) {},
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};

export default validation;
