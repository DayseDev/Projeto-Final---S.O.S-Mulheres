const oficinas = require('../models/oficinasModels')

const getAllOficinas = (req, res) => {
    oficinas.find((err, livros) => {
        res.status(200).json(oficinas);
    })
}

const getOficinas = (req, res) => {
    const id = req.params.id;

    oficinas.findById(id, (err, oficinas) => {
        if (err) {
            res.status(400).send({ message: `${err.message} - id da oficina não encontrado` })
        } else {
            res.status(200).send(oficinas);
        }
    })
}


const createOfinas = (req, res) => {
    let oficina = new oficinas(req.body);

    oficina.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar oficina` })
        } else {
            res.status(201).send(oficina.toJSON())
        }
    })
};


const updateOficinas = (req, res) => {
    const id = req.params.id;

    oficinas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: 'Oficina atualizada com sucesso' })
        } else {
            res.status(500).send({ message: err.message })
        }
    })
};


const deleteOficinas = (req, res) => {
    const id = req.params.id;

    oficinas.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: 'Oficina deletada com sucesso' })
        } else {
            res.status(500).send({ message: err.message })
        }
    })
};


module.exports = {
    getAllOficinas,
    getOficinas,
    createOfinas,
    updateOficinas,
    deleteOficinas

}