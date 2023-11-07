const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://FinneySolomon:yQS254ZnvJdKnsoa@todo-application.fd1wqcs.mongodb.net/?retryWrites=true&w=majority"; // Update the connection string with your database name

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.error(err);
    console.log("Not Yet connected");
  });

module.exports = mongoose;
