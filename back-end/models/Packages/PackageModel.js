const  { Schema, model } = require('mongoose');

const AutoGeneratePlugin = require('../schema_plugins')


const packageSchema = new Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  dailyRoi: {
    type: Number,
  },
},{versionKey: false});


// Add auto generate plugin for auto Id, createdAt and updatedAt
packageSchema.plugin(AutoGeneratePlugin);

const Package = model('Package', packageSchema);
module.exports = Package;