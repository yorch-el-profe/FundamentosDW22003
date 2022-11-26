require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(function () {
	console.log("Conectado a la base de datos");
});

// 1. Schema: Estructura de los documentos para una colección
// Tipos de datos: String, Number, Boolean, Mixed, ObjectId, Array, Date
// Restricciones: nada, required, min, max, minLength, maxLength, unique
const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, minLength: 8 },
		telephones: [String],
		age: { type: Number, min: 18, max: 100 },
	},
	{ collection: "usuarios" }
);

// 2. Modelo: Interacturar con la base de datos
const UserModel = mongoose.model("usuarios", UserSchema);

// Ya puedo empezar a realizar consultas
