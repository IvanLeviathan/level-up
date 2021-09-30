const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
title: { type: String, require: true },
date: { type: Date, default: Date.now },
desc: {type: String},
owner: { type: Types.ObjectId, ref: 'User' }
});

module.exports = model ('Todo', schema);