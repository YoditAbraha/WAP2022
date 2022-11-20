/**
 * userinfo-app.js
 */
const userInfo = require("./lib/userModule");

console.log(`${userInfo.getName()} lives in ${userInfo.getLocation()} and was born on ${userInfo.dob}`);
