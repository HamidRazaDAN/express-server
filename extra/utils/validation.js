const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee1@successive.tec",
    reviewerEmail: "reviewer1@successive.tech"
  }
];

const validUsers = [];
const invalidUsers = [];

function validateEmail(email) {
  const regex = /^([A-Za-z0-9 \-\.])+\@(successive.tech)/;
  return regex.test(email);
}

function validateUsers(users) {
  users.forEach(function(user, index) {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      validUsers.push(`User${index}`);
    } else {
      invalidUsers.push(`User${index}`);
    }
  });
}

validateUsers(users);
console.log(
  `${validUsers.length} valid and ${invalidUsers.length} invalid users`
);

if (validUsers.length != 0) {
  console.log(`Valid Users are ${validUsers}`);
}

if (invalidUsers.length != 0) {
  console.log(`Invalid Users are ${invalidUsers}`);
}
