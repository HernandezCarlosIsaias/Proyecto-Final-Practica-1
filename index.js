const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const path = require("path");

const authRouter = require("./routes/authRutes")
const usuarioRouter = require("./routes/usuarioRoutes");




const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/usuarios", usuarioRouter);

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en puerto ${PORT}`);
})