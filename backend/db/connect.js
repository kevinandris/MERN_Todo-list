const mongoose = require('mongoose');

const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: false
    })
}

module.exports = connectDb;