const mongoose = require('mongoose');

const connectDB = async () => {
    // mongoose.connect().then(resp => {});
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`)
};

module.exports = connectDB;