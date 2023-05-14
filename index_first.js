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

const newObj = { a: 22, b: "nuevo objeto definido in exec", c: true };

// process.env.VAR3_common = JSON.stringify(newObj);
process.env.VAR3_common = 'NEW TEXT'
console.log("VAR3_common:", process.env.VAR3_common);
