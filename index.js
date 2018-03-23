#!/usr/bin/env node
const ncp = require("copy-paste");

const ObjectID = require('mongodb').ObjectID;
const objectId = new ObjectID();

ncp.copy(objectId, function () {
  console.log(`copied "${objectId}" to clipboard`);
});
