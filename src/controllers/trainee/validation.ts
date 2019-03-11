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
      required: true,
      regex: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
    }
  },
  delete: {
    id: {
      in: ['params'],
      required: true,
    }
  },
  get: {
    skip: {
      in: ['query'],
      required: false,
      number: true,
      default: 10,
    },
    limit: {
      in: ['query'],
      required: false,
      number: true,
      default: 20,
    }
  },
  update: {
    id: {
      in: ['body'],
      required: true,
      string: true
    },
    dataToUpdate: {
      in: ['body'],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {},
    }
  },
  read: {
    id: {
      in: ['params'],
      required: true,
      string: true,
    }
  }
}

export default validation;
