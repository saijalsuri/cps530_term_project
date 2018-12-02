const mongoose = require('mongoose')
process.env.MONGODB == mongodb://admin:givemeaccess01@ds113849.mlab.com:13849/mydb
mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function () {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});