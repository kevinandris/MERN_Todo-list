const CrudSchema = require('../models/crud')

const getAllData = async (req, res) => {
    const crud = await CrudSchema.find({})
    res.status(200).json({crud})
}

const createData = async (req, res) => {
    const crud = await CrudSchema.create(req.body);
    res.status(201).json({crud})
}

const getOneItem = async (req, res) => {
    console.log('Get one item')
}

const updateAllData = async (req, res) => {
    console.log('Update all the data')
}

const deleteAllData = async (req, res) => {
    console.log('Delete all the data')
}

module.exports = {
    getAllData,
    createData,
    getOneItem, 
    updateAllData,
    deleteAllData
}