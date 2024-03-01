import express from "express";
import testingRoutes from "./routes/testing.routes.js";
import { PORT } from "./config.js";
import { fileURLToPath } from "url";
import * as path from "path";
import bodyParser from "body-parser";
import bcrypt from  'bcrypt';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();



app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(testingRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint not found",
    });
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);



//login (kind of)
const users=[];
app.post("/register", async (req, res) =>{ 


    try{

        const hash=await bcrypt.hash(req.body.password,12); //hash the password
        
        users.push({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email: req.body.email,
            password: hash,
            metodospado:req.body.metodospago,
            fecha_exp:req.body.fechaexp,
            pregunta_1:req.body.pregunta1,
            pregunta_2:req.body.pregunta2,
            pregunta_3:req.body.pregunta3,
        
            
    })
    res.redirect('/hola')
    console.log(users);

    
}catch(e){

    console.log(e)


    

        
    }

})
