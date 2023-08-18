const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const investmentSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['active', 'expired'],
      default: 'active',
    },
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
    package: {
      type: Schema.Types.String,
      ref: 'Package',
      required: true,
    },
    invAmount: {
      type: Number,
      required: true,
    },
    dailyProfit: {
      type: Number,
      default: 0.0,
    },
    dailyLoss: {
      type: Number,
      default: 0.0,
    },
    netProfit: {
      type: Number,
      default: 0.0,
    },

    totalReturn: {
      type: Number,
      default: 0.0,
    },

    monthlyProfit: {
      type: Number,
      default: 0.0,
    },
    monthlyLoss: {
      type: Number,
      default: 0.0,
    },
    referalBonus: {
      type: Number,
      default: 0.0,
    },
    rewards: {
      type: Number,
      default: 0.0,
    },
  },
  {versionKey: false}
);

investmentSchema.plugin(AutoGeneratePlugin);

const Investment = model('Investment', investmentSchema);
module.exports = Investment;
