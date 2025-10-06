const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/chatApp';

(async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Test: MongoDB Connected: ${conn.connection.host}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Test: MongoDB connection failed:', err.message);
    process.exit(1);
  }
})();
