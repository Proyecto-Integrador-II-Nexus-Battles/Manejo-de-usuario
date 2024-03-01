//const mariadb = require("mariadb")
import mariadb from "mariadb";
export const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'sofia',
    database: 'sofia',
    port: '3307'
})

