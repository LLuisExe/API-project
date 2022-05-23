const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PublicationSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        id_creator: {
            type: String,
            required: true,
        },
        id_service: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: "Description cant be null",
        },
        phone: {
            type: String,
        },
        date: {
            type: String,
            required: true,
        },
        schedule: {
            type: String,
        },
    },
    { timestamps: true }
);

const PublicationModel = mongoose.model("publication", PublicationSchema);

module.exports = PublicationModel;