const getAllData = async (req, res) => {
    // res.status(200).json('All the data is here')
    const crud = await
}

const createData = async (req, res) => {
    console.log('Create new data')
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