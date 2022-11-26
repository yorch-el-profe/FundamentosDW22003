require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(function () {
	console.log("Conectado a la base de datos");
});

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, minLength: 8 },
		telephones: [String],
		age: { type: Number, min: 18, max: 100 },
	},
	{ collection: "usuarios" }
);

const UserModel = mongoose.model("usuarios", UserSchema);

// Actualización

// UPDATE usuarios SET password = 'hsdkjhiuquwbkasb' WHERE username = 'paquito47848723';
// Un update sin $set, reemplaza todo el documento
// Un update con $set, actualiza los campos especificados conservando lo demás
UserModel.updateOne(
	{ username: "paquito47848723" },
	{ $set: { password: "hsdkjhiuquwbkasb" } }
).then(function () {
	console.log("Documento actualizado");
});

// Eliminación

// DELETE FROM usuarios WHERE username = 'julio2190';
UserModel.deleteOne({ username: "julio2190" }).then(function () {
	console.log("Documento eliminado");
});
