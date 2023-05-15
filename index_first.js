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
const fs = require("fs");

if (process.env.ENV_PATH_TOCHANGE) {
  fs.appendFile(
    process.env.ENV_PATH_TOCHANGE,
    `\r\nDATA_RECEIVED='${JSON.stringify(newObj)}'`,
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
}

/* 
ENV_PATH_TOCHANGE="../node_base2/.env" node index_first.js
*/
