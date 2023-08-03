const  { Schema, model } = require('mongoose');

const AutoGeneratePlugin = require('../schema_plugins')


const accountSchema = new Schema({
  name: {
    type: String,
    optional: true,
  }
},{versionKey: false});


// Add auto generate plugin for auto Id, createdAt and updatedAt
accountSchema.plugin(AutoGeneratePlugin);

const Account = model('Account', accountSchema);
module.exports = Account;