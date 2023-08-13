const  { Schema, model } = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins')


const depositSchema = new Schema({
  status: {
    type: String,
    enum: ['successful', 'pending', 'failed'],
    default: 'pending',
  },
  package: {
    type: Schema.Types.String,
    ref: 'Package'
  },
  depAmount: {
    type: Number,
  },
  user: {
    type: Schema.Types.String,
    ref: 'User'
  },
},{versionKey: false});

investmentSchema.plugin(AutoGeneratePlugin);

const Deposit = model('Deposit', depositSchema);
module.exports = Deposit;