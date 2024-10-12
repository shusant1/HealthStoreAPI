
const Supplement = require('../models/Supplement');

exports.getAllSupplements = async (req, res) => {
    try {
        const supplements = await Supplement.find();
        res.json(supplements);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getSupplementById = async (req, res) => {
    try {
        const supplement = await Supplement.findById(req.params.id);
        if (!supplement) return res.status(404).send('Supplement not found');
        res.json(supplement);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.addSupplement = async (req, res) => {
    const supplement = new Supplement(req.body);
    try {
        await supplement.save();
        res.status(201).send(supplement);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteAllSupplements = async (req, res) => {
    try {
        await Supplement.deleteMany();
        res.send('All supplements deleted');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteSupplementById = async (req, res) => {
    try {
        const supplement = await Supplement.findByIdAndDelete(req.params.id);
        if (!supplement) return res.status(404).send('Supplement not found');
        res.send('Supplement deleted');
    } catch (err) {
        res.status(500).send(err);
    }
};
