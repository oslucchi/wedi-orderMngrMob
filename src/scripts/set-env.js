#!/usr/bin/node
const fs = require("fs");
const appPath = process.argv[2];
const environment = process.argv[3];
const envFileContent = require(appPath +
  "/src/environment/" +
  environment +
  ".json");
fs.writeFileSync(
  appPath + "/src/environment/env.json",
  JSON.stringify(envFileContent, undefined, 2)
);
console.log("Env set to " + process.argv[2]);
