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

UserModel.create({
	username: "paquito47848723",
	email: "paquito47848723@gmail.com",
	password: "123123123",
})
	.then(function (document) {
		console.log(document);
	})
	.catch(function (error) {
		console.log("Ocurrió un error al insertar el documento");
		console.error(error);
	});
