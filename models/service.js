const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ServiseSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        level: {
            type: String, //opciones basico - medio - avanzado
            required: true,
        },

    },
    { timestamps: true }
);

const ServiseModel = mongoose.model("Servise", ServiseSchema);

module.exports = ServiseModel;