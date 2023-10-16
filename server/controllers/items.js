import ItemsModel from '../models/items.js'

const get = async (req, res) => {
    try{
        const results = await ItemsModel.findAll();
        res.status(200).json(results.rows);
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

const getById = async (req, res) => {
    try {
        const results = await ItemsModel.findById(req.params.id);
        res.status(200).json(results.rows[0]);
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

const create = async (req, res) => {
    try {
        const { details } = req.body;
        const results = await ItemsModel.create(details)
        res.status(201).json(results.rows);
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

const update = async (req, res) => {
    try {
        const { details } = req.body
        const results = await ItemsModel.update(req.params.id, details)
        res.status(201).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

const remove = async (req, res) => {
    try {
        const results = await ItemsModel.delete(req.params.id)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

export default {
    get,
    getById,
    create,
    update,
    delete: remove
}