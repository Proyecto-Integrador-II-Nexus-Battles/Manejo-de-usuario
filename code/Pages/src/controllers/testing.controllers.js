import path from "path";
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';
import { pool } from "../db.js";

export const defaultR = (req, res) => {
    //const __filename = fileURLToPath(import.meta.url);
    //const __dirname = path.dirname(__filename);
    res.render("login");
};

export const defaultR2 = (req, res) => {
    res.render("admin_main_page");
};

export const defaultR3 = (req, res) => {
    res.render("user_review");
};

export const defaultR4 = async (req, res) => {

    /*
    let users = [];

    const hash = await bcrypt.hash(req.body.password, 12); //hash the password

    users.push({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: hash,
        metodospado: req.body.metodospago,
        fecha_exp: req.body.fecha_exp,
        pregunta_1: req.body.pregunta_1,
        pregunta_2: req.body.pregunta_2,
        pregunta_3: req.body.pregunta_3,




    })

    await pool.query("INSERT INTO users set ?", [users]);
};
*/
    const hash = await bcrypt.hash(req.body.password, 12);

    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let password = hash;
    let metodospago = req.body.metodospago;
    let fecha_exp = req.body.fecha_exp;
    let pregunta_1 = req.body.pregunta_1;
    let pregunta_2 = req.body.pregunta_2;
    let pregunta_3 = req.body.pregunta_3;

    try {
        pool.query(
            "INSERT INTO sofia.users(nombre, apellido, email, password, metodospago,fecha_exp,pregunta_1,pregunta_2,pregunta_3) VALUES (?, ?, ?,?,?,?,?,?,?)",
            [nombre, apellido, email, password, metodospago, fecha_exp, pregunta_1, pregunta_2, pregunta_3],
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

    res.render('register');
}





