require("dotenv").config();

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