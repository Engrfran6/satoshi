const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const depositSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['successful', 'pending', 'failed'],
      default: 'pending',
    },
    depAmount: {
      type: Number,
    },
    photo: {
      type: String,
    },
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
  },
  {versionKey: false}
);

depositSchema.plugin(AutoGeneratePlugin);

const Deposit = model('Deposit', depositSchema);
module.exports = Deposit;
