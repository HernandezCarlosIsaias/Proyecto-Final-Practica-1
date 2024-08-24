const db = require("../models");
const Oficina = db.oficina;

const office = (req, res) => {
    res.status(200).send("Ruta principal de oficinas");
}

const list = async(req, res) => {
    try {
        const listaOficinas = await Oficina.findAll();
        if (listaOficinas.length > 0) {
            res.status(200).send(listaOficinas);
        } else {
            res.status(404).send({ message: "Aun no hay registros" });
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    office,
    list
}