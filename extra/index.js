import { diamond, equilateral } from "./patterns";
import { hasPermission, validateUsers } from "./utils";

let users = [
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

diamond(5);
equilateral(5);
hasPermission("getUsers", "trainer", "write");
validateUsers(users);
