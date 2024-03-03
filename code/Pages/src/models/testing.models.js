import { pool } from "../db.js";

export const getUsers = async () => {
    const usernamesResult = await pool.query("SELECT nombre FROM users");
    return usernamesResult.map(row => row.nombre);
};

export const searchUsers = async (query) => {
    const resultados = await pool.query("SELECT nombre FROM users WHERE nombre LIKE ?", [`${query}%`]);
    return resultados;
};

export const getUserInfo = async (username) => {
    const userResult = await pool.query("SELECT nombre, apellido, usuario, email, metodospago FROM users WHERE nombre = ?", [username]);
    return userResult[0];
};