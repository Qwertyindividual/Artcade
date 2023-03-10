require("dotenv").config();
const mysql = require("mysql")

var con = mysql.createPool({
  host: process.env.HOST,
  database: process.env.NAME,
  user: process.env.User,
  password: process.env.Pwd,
  port: process.env.Port,
  multipleStatements: true,
});

module.exports = con;