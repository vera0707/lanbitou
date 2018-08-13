const mongoose = require('mongoose');
const userSchemas = require("../schemas/users");

module.exports =  mongoose.model('User',userSchemas);