import { EmailType } from './../interfaces';
import { validateEmail } from "./helpers";

export default function validateUsers(users: EmailType[]) {
  const validUsers: string[] = [];
  const invalidUsers: string[] = [];

  users.forEach(function(user: EmailType, index: number) {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      validUsers.push(`User${index}`);
    } else {
      invalidUsers.push(`User${index}`);
    }
  });

  console.log(
    `${validUsers.length} valid and ${invalidUsers.length} invalid users`
  );

  if (validUsers.length != 0) {
    console.log(`Valid Users are ${validUsers}`);
  }

  if (invalidUsers.length != 0) {
    console.log(`Invalid Users are ${invalidUsers}`);
  }
}
