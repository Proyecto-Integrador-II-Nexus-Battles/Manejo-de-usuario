const mariadb = require('mariadb');

const pool = mariadb.createConnection({
  host: 'dirección_del_servidor', // Cambia esto a la dirección de tu servidor MariaDB
  user: 'tu_usuario', // Cambia esto al nombre de usuario de tu base de datos
  password: 'tu_contraseña', // Cambia esto a tu contraseña de la base de datos
  database: 'Database_Login_PiII'
});

async function PeticionMariaDB(Query) {
    let conn;
    try {
      conn = await pool.getConnection(); //obtener una nueva conección
      const res = await conn.query(Query, [1, "mariadb"]);
      return res; //retornar el resultado de la consulta
    } finally {
      if (conn) conn.release(); //terminar la conexión
    } 
}
