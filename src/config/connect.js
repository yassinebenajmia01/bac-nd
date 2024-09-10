const mongoose = require("mongoose");

mongoose
  .connect(
     "mongodb://localhost:27017/stager"
    //"mongodb+srv://cardibee753:skip753@cluster0.iz8dn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  
   )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
