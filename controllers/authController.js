const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const Persona = db.persona;

const login = async (req,res) => {
    const {mail,password} = req.body;
    try {
        const persona = await Persona.findOne({where:{mail}});
        if (!persona) {
            return res.status (404).send ({menssage: "Persona no encontrada"});
        }
        const isMatch = await bcrypt.compare(password,persona.password);
        if (!isMatch){
            return res.status(400).send ({menssage: "Password incorrecto"});
        } 
        const token= jwt.sign({
            id:persona.id,
            nombre: persona.nombre,
            mail: persona.mail
        },"1234",{expiresIn:180});
        res.status(200).send({token});
    } catch (error) {
        res.status(500).send({
            menssage:"Error del servidor", 
            tipo:error.name,
            detalles:error.menssage
        });
    }
}

module.exports = {
    login,
}