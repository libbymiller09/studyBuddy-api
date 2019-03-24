const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetupSchema = new Schema({
  subject: String,
  time: String,
  place: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }

});

mongoose.model('meetups', meetupSchema);