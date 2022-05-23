const ServiceModel = require("../models/service");

exports.getService = async (req, res, next) => {
    try {
        let name = req.params.name;
        let Service = await ServiceModel.findOne({ name });
        if (!Service) {
            return res.status(404).send({
                message: "Service not found",
            });
        }
        res.send({ Service });
    } catch (err) {
        next(err);
    }
};

exports.createService = async (req, res, next) => {
    try {
        //TODO: Requiere validation
        let { name, level } = req.body;
        let newService = await ServiceModel.create({ name, level });
        res.send({ newService });
    } catch (err) {
        next(err);
    }
};

exports.updateService = async (req, res, next) => {
    try {
        // TODO: Requiere validation
        let nameToUpdate = req.params.name;
        // New data
        let { name, level } = req.body;
        let Service = await ServiceModel.findOne({ name: nameToUpdate });
        if (!Service) return res.status(400).send({
            message: "Service to update not found"
        })

        //modificables
        service.name = name;
        service.level = level;

        let updatedService = await Service.save();

        if (service == updatedService) {
            ø
            return res.send({
                message: "service is updated",
                service: updatedService,
            });
        }
        res.send({
            message: "cannot update de service",
        });
    } catch (err) {
        next(err);
    }
};

exports.deleteService = async (req, res, next) => {
    try {
        let name = req.params.name;
        let { deletedCount } = await ServiceModel.deleteOne({ name });
        if (deletedCount == 1) {
            return res.send({
                message: "successfully deleted",
            });
        }
        return res.status(400).send({
            message: "cannot delete the service, maybe is delete before",
        });
    } catch (err) {
        next(err);
    }
};