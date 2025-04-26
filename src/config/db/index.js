const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tusan_english_dev');
        console.log('Connect to MongoDB successfully!');
    } catch (error) {
        console.error('Connect to MongoDB failed:', error.message);
    }

}
module.exports = {connect};