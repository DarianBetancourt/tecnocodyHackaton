const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tecnocody');


const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'users' }
);

const presenciaVirtualSchema = new mongoose.Schema({
    name: String,
    url: String , 
    midia: String,
    status  : String
}, { collection: 'presenciaVirtual' }
);

/* const userSchema = new mongoose.Schema({
    username: String,
    email   : String,
    password: String,
    rol     : String,
    cpnj    : Number,
    cpf     : Number,
    websites: String,
    status  : String
}, { collection: 'users' }
);

const presenciaVirtualSchema = new mongoose.Schema({
    name: String,
    url: String , 
    midia: String,
    status  : String
}, { collection: 'presenciaVirtual' }
);

 PresenciaVirtualSchema: presenciaVirtualSchema }; */
module.exports = { Mongoose: mongoose, UserSchema: userSchema,PresenciaVirtualSchema: presenciaVirtualSchema };