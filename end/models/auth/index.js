const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  name: {type: String},
  surname: {type: String},
  age: {type: Number},
  phone: {type: String},
  sex: {type: String},
  todo: [{type: Types.ObjectId, ref: 'Todo'}],
});

module.exports = model ('User', schema);