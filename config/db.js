const mongoose = require("mongoose");

//Map global promise
mongoose.Promise = global.Promise;
//Connect to MLab DB
mongoose
  .connect(
    "mongodb://llrzjohnson:lu1salu1sa@ds119113.mlab.com:19113/pusherpoll",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
