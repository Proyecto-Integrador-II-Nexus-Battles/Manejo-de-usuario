//const mariadb = require("mariadb")
import mariadb from "mariadb";
export const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'test',
    port: '3307'
})

