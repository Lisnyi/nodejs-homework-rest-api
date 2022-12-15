const addController = require('./add')
const getAllController = require('./getAll')
const getByIdController = require('./getById')
const updateByIdController = require('./updateById')
const deleteByIdController = require('./deleteById')
const updateFavoriteController = require('./updateFavorite')

module.exports = {
    addController,
    getAllController,
    getByIdController,
    updateByIdController,
    deleteByIdController,
    updateFavoriteController,
}