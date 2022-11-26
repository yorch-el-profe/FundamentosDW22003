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

// SELECT * FROM usuarios;
UserModel.find()
	.exec()
	.then(function (documents) {
		console.log("------------- [find] -------------");
		console.log(documents);
	});

// SELECT * FROM usuarios WHERE email = "julio2129@gmail.com"
UserModel.find({ email: "julio2129@gmail.com" })
	.exec()
	.then(function (documents) {
		console.log("------------- [find exact] -------------");
		console.log(documents);
	});

// SELECT * FROM usuarios WHERE age >= 25
UserModel.find({ age: { $gte: 25 } })
	.exec()
	.then(function (documents) {
		console.log("------------- [find >=] -------------");
		console.log(documents);
	});

// Obtener los documentos que NO tengan edad
UserModel.find({ age: { $exists: false } })
	.exec()
	.then(function (documents) {
		console.log("------------- [find age not exists] -------------");
		console.log(documents);
	});
