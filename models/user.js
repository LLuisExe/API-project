const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        //falta que sea correlativo el id
        //falta ver si se pueden poner solo String a todos los datos
        id: {  
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
        },
        username: {
            type: String,
            required: true, //requerido
            unique: true,   //unica
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);


/*
rebicion pendiente contraseñas y funciones
*/
// Always encrypt the password before save
UserSchema.pre("save", async function (next) {
    const user = this;
    // Auto-generate Salt, and 10 salt rounds
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

// Helper method to validate password
UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;