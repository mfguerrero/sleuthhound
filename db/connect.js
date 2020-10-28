const mongoose = require('mongoose');

const connectDB = async () => {

  const conn = await mongoose.connect(process.env.MONGO_DB_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)

}

module.exports = connectDB;