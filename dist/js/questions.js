const { capitalizeFirstCharacter, lowerCase, isNumber, isEmail, isBlank } = require("../../lib/util");

const questionsRole = [
  {
    prefix: "\nā š”",
    type: "rawlist",
    name: "role",
    message: "Please select the employee's role?",
    choices: ["Engineer", "Intern"],
    suffix: " š”",
  },
];

const questionsBasicInfo = [
  {
    prefix: "ā š” 1)",
    type: "input",
    name: "firstName",
    message: `\u001b[0;1mEnter the \x1b[36;1mfirst\u001b[0;1m name?`,
    default: "Steve",
    suffix: " š”",
    validate(answer) {
      return isBlank(answer, "first name");
    },
    filter(answer) {
      return capitalizeFirstCharacter(answer);
    },
  },
  {
    prefix: "ā š” 2)",
    type: "input",
    name: "lastName",
    message: `\u001b[0;1mEnter the \x1b[36;1mlast\u001b[0;1m name?`,
    default: "Calla",
    suffix: " š”",
    validate(answer) {
      return isBlank(answer, "last name");
    },
    filter(answer) {
      return capitalizeFirstCharacter(answer);
    },
  },
  {
    prefix: "ā š” 3)",
    name: "employeeId",
    type: "input",
    message: `\u001b[0;1mEnter the \x1b[36;1memployee ID\u001b[0;1m?`,
    default: "1",
    validate(answer) {
      return isNumber(answer);
    },
    filter(answer) {
      return answer;
    },
  },
  {
    prefix: "ā š” 4)",
    name: "emailAddress",
    type: "input",
    message: `\u001b[0;1mEnter the \x1b[36;1memail address\u001b[0;1m?`,
    default: "callasteven@gmail.com",
    validate(answer) {
      return isEmail(answer);
    },
  },
];

const questionsManager = [
  {
    prefix: "ā š” 5)",
    type: "input",
    name: "officeNumber",
    message: `\u001b[0;1mEnter the manager's \x1b[36;1moffice number\u001b[0;1m?`,
    default: "10",
    suffix: " š”",
    validate(answer) {
      return isBlank(answer, "manager's office number");
    },
    filter(answer) {
      return answer.trim();
    },
  },
];

const questionsEngineer = [
  {
    prefix: "ā š” 5)",
    type: "input",
    name: "gitHubUserName",
    message: `\u001b[0;1mEnter the engineer's \x1b[36;1mGitHub user name\u001b[0;1m?`,
    default: "stevecalla",
    suffix: " š”",
    validate(answer) {
      return isBlank(answer, "engineer' GitHub user name");
    },
    filter(answer) {
      return lowerCase(answer);
    },
  },
];

const questionsIntern = [
  {
    prefix: "ā š” 5)",
    type: "input",
    name: "internSchool",
    message: `\u001b[0;1mEnter the intern's\x1b[36;1mschool.\u001b[0;1m?`,
    default: "Oxford",
    suffix: " š”",
    validate(answer) {
      return isBlank(answer, "intern's school");
    },
    filter(answer) {
      return capitalizeFirstCharacter(answer);
    },
  },
];

const questionsContinue = [
  {
    prefix: "\nā š”",
    type: "confirm",
    name: "isContinue",
    message: `Would you like to add more team members?`,
    default: "true",
    suffix: " š”",
  },
];

module.exports = {
  questionsRole,
  questionsBasicInfo,
  questionsManager,
  questionsEngineer,
  questionsIntern,
  questionsContinue,
};
