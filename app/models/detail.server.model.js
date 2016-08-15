var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var detailSchema = new Schema ({
  name: String,
  age: Number,
  email: String,
  contactnum: Number,
  dateofbirth: String,
  image: String,
  facebook: String,
  linkedin: String,
  emailme: String
});

mongoose.model('Detail', detailSchema);
