const CrudSchema = require('../models/crud')

    const getAllData = async (req, res) => {

        try {
            const crud = await CrudSchema.find({})
            res.status(200).json({crud})
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    const createData = async (req, res) => {
        try {
            const crud = await CrudSchema.create(req.body);
            res.status(201).json({crud})
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    const getOneItem = async (req, res) => {

        try {
            
            const { id:crudId } = req.params;
            const crud = await CrudSchema.findOne({_id:crudId});
    
            if (!crud) {
                return res.status(404).json({message: 'The item does not exist!'})
            }
    
            res.status(200).json({crud})
        } catch (error) {
            res.status(500).json({message: error})
        }
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