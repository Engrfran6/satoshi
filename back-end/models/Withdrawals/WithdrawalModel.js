const  { Schema, model } = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins')


const withdrawSchema = new Schema({
  status: {
    type: String,
    enum: ['successful', 'pending', 'failed'],
    default: 'pending',
  },
  account: {
    type: Schema.Types.String,
    ref: 'Account'
  },
  withdrawalAmount: {
    type: Number,
  },
  user: {
    type: Schema.Types.String,
    ref: 'User'
  },
},{versionKey: false});

investmentSchema.plugin(AutoGeneratePlugin);

const Withdraw = model('Withdraw', withdrawSchema);
module.exports = Withdraw;