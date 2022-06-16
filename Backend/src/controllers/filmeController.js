var Filme = require('../model/filmes');
var Genero = require('../model/genero');
var sequelize = require('../model/database');

const controllers = {}
sequelize.sync()

controllers.list = async (req, res) => {
    const data = await Filme.findAll({
        include: [Genero]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({success:true,data:data});
}

/* REGISTAR ---------------------- */
controllers.create = async (req, res) => {
    // data
    const { descricao, titulo, foto, generoId  } = req.body;
    // create
    const data = await Filme.create({
        descricao: descricao,
        titulo: titulo,
        foto: foto,
        generoId: generoId
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error)
            return error;
        })

    // return res
    res.status(200).json({
        success: true,
        message: "Registado",
        data: data
    });
}

/* BUSCAR para EDITAR ----------------------------------------------- */
controllers.get = async (req, res) => {
    const { id } = req.params;
    const data = await Filme.findAll({
        where: { id: id },
        include: [Genero]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({success:true,data:data});
}

/* EDITAR --------------------------------------------------- */
controllers.update = async (req, res) => {

    // parameter get id
    const { id } = req.params;

    // parameter POST
    const { descricao, titulo, foto, generoId } = req.body;

    // Update data
    const data = await Filme.update({
        descricao: descricao,
        titulo: titulo,
        foto: foto,
        generoId: generoId
    },
        {
            where: {id:id}
        })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({success:true,data:data,message: "Updated successful" });
}

controllers.delete = async (req, res) => {

    // parâmetros por post
    const {id} = req.params;

    // delete por sequelize
    const del = await Filme.destroy({
        
        where: {id:id}
        
    })
    res.json({success:true,deleted:del,message: "Deleted successful" });
}

module.exports = controllers;
