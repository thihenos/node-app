"use strict";

let fs        = require("fs");
let path      = require("path");
const mongoose = require("mongoose");
let db = {};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI, { useNewUrlParser: true })
.then(()=>{
	userMongoClient: true
	console.log('Connection done!');
}).catch((err)=>{
	console.log('Connection not done!');
});

db = mongoose;

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
	require(__dirname + '//' + file)
});

module.exports = db;