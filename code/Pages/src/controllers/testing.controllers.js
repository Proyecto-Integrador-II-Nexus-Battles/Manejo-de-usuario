import path from "path";
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';
import { pool } from "../db.js";
import { json } from "express";

export const defaultR = (req, res) => {
    res.render("login");

};

// export const defaultR2 = async (req, res) => {
//     const usernames = await pool.query("SELECT nombre FROM users")
//     res.render("admin_main_page");
// };

export const defaultR3 = (req, res) => {
    res.render("user_review");
};

export const defaultR4 = async (req, res) => {
    res.render('register');
}

export const GetUsername = async (req, res) => {
    const usernamesResult = await pool.query("SELECT nombre FROM users");
    const usernames = usernamesResult.map(row => row.nombre);
    res.render('admin_main_page', { usernames: usernames });
};

export const BuscarUsername = async (req, res) => {
    const query = req.query.q;
    const resultados = await pool.query("SELECT nombre FROM users WHERE nombre LIKE ?", [`${query}%`]);
    res.json(resultados);
};


export const login = async (req, res) => {
    console.log("holis")
    let email = req.body.email;
    let password = req.body.password;

    let email_db = await pool.query("SELECT email FROM users WHERE email=?", [email]);
    let password_db = await pool.query("SELECT password FROM users WHERE email=?", [email]);
    console.log(email_db)
    console.log(password_db)

    email_db = email_db[0].email;
    console.log(email_db);

    password_db = password_db[0].password;

    if (email === email_db && bcrypt.compareSync(password, password_db)) {

        console.log('exitou');
    }

}



export const registro = async (req, res) => {

    const hash = await bcrypt.hash(req.body.password, 12);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let password = hash;
    let metodospago = req.body.metodospago;
    let numero_tarjeta = req.body.numero_tarjeta;
    let cvv = req.body.cvv;
    let fecha_exp = req.body.fecha_exp;
    let pregunta_1 = req.body.pregunta_1;
    let pregunta_2 = req.body.pregunta_2;
    let pregunta_3 = req.body.pregunta_3;

    try {
        pool.query(
            "INSERT INTO test.users(nombre, apellido, email, password, metodospago,numero_tarjeta,cvv,fecha_exp,pregunta_1,pregunta_2,pregunta_3) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            [nombre, apellido, email, password, metodospago, numero_tarjeta, cvv, fecha_exp, pregunta_1, pregunta_2, pregunta_3],

            (err, result) => {
                if (err) throw err;
                console.log(result);
                conn.end(err => {
                    if (err) {
                        console.log("SQL error in closing a connection: ", err);
                    }
                });
            });


    } catch (err) {

        // Manage Errors
        console.log("SQL error in establishing a connection: ", err);
    }
}





