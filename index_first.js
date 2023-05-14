console.log("test");
require("dotenv").config();

console.log(process.env);

const figlet = require("figlet");

const myVar = process.env.VAR_REPO_1;
console.log(
  figlet.textSync(myVar, {
    //   font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);
