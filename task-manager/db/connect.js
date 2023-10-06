const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((db) => {
        return { db, connection: db.connections[0].name }
    })
}

module.exports = connectDB