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
  profitRate: {
    type: Number,
  },
  lossRate: {
    type: Number,
  },
  dailyLoss: {
    type: Number,
  },
  minDeposit: {
    type: Number,
  },
  maxDeposit: {
    type: Number,
  },
  totalPercentageReturn: {
    type: Number,
  },
  investment: {
    type: [Schema.Types.String],
    ref: 'Investment'
  }
},{versionKey: false});

// Add auto generate plugin for auto Id, createdAt and updatedAt
packageSchema.plugin(AutoGeneratePlugin);

const Package = model('Package', packageSchema);
module.exports = Package;