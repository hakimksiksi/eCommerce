const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/[your data base name]')
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));



  let repoSchema = mongoose.Schema({


});



let Repo = mongoose.model('[your collection name]', repoSchema);



module.exports.Repo = Repo;