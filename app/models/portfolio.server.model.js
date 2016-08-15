var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portfolioSchema = new Schema ([{
  name: String,
  category: String,
  description: String,
  link: String,
  image: String
}]);


mongoose.model('Portfolio', portfolioSchema);
