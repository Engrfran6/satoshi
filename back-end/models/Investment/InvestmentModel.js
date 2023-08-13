const  { Schema, model } = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins')


const investmentSchema = new Schema({
  status: {
    type: String,
    enum: ['active', 'expired'],
    default: 'active',
  },
  package: {
    type: Schema.Types.String,
    ref: 'Package'
  },
  invAmount: {
    type: Number,
  },
  user: {
    type: Schema.Types.String,
    ref: 'User'
  },
},{versionKey: false});

investmentSchema.plugin(AutoGeneratePlugin);

const Investment = model('Investment', investmentSchema);
module.exports = Investment;