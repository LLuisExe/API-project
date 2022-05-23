const PublicationModel = require("../models/publication");

exports.getPublication = async (req, res, next) => {
    try {
        let title = req.params.title;
        let Publication = await PublicationModel.findOne({ title });
        if (!Publication) {
            return res.status(404).send({
                message: "Publication not found",
            });
        }
        res.send({ Publication });
    } catch (err) {
        next(err);
    }
};

exports.createPublication = async (req, res, next) => {
    try {
        //TODO: Requiere validation
        let { id, title, id_creator, id_service, image, description, phone, date, schedule } = req.body;
        let newPublication = await PublicationModel.create({ id, title, id_creator, id_service, image, description, phone, date, schedule });
        res.send({ newPublication });
    } catch (err) {
        next(err);
    }
};

exports.updatePublication = async (req, res, next) => {
    try {
        // TODO: Requiere validation
        let titleToUpdate = req.params.title;
        // New data
        let { title, id_service, image, description, phone, schedule } = req.body;
        let publication = await PublicationModel.findOne({ title: titleToUpdate });
        if (!publication) return res.status(400).send({
            message: "Publication to update not found"
        })

        //modificables
        publication.title = title;
        publication.id_service = id_service;
        publication.image = image;
        publication.description = description;
        publication.phone = phone;
        publication.schedule = schedule;

        let updatedPublication = await publication.save();

        if (publication == updatedpublication) {ø
            return res.send({
                message: "publication is updated",
                publication: updatedPublication,
            });
        }
        res.send({
            message: "cannot update de publication",
        });
    } catch (err) {
        next(err);
    }
};

exports.deletePublication = async (req, res, next) => {
    try {
        let title = req.params.title;
        let { deletedCount } = await PublicationModel.deleteOne({ title });
        if (deletedCount == 1) {
            return res.send({
                message: "successfully deleted",
            });
        }
        return res.status(400).send({
            message: "cannot delete the Publication, maybe is delete before",
        });
    } catch (err) {
        next(err);
    }
};