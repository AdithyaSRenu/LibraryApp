//accessing mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb+srv://userone:userone@fsdfiles.4ierb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : String,
    author: String,
    genre : String,
    image : String

});

//model creation
var Bookdata =  mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
