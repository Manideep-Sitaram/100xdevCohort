const mongoose = require('mongoose');
const { MONGODB_CONNECTION_STRING } = require('../../../../Secrets');

mongoose.connect(`${MONGODB_CONNECTION_STRING}/CardDatabase`)
        .then(() => console.log("MongoDB Connected"))
        .catch(() => console.log("Some error occured while connection"));

    
const cardSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    description: {
        require: true,
        type: String
    },
    intrestList: [{
        require: true,
        type: String 
    }]
});

const Card = mongoose.model('Todo',cardSchema);

module.exports = {
    Card
}