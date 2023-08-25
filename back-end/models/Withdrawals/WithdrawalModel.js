const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const withdrawSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['successful', 'pending', 'failed'],
      default: 'pending',
    },

    withAmount: {
      type: Number,
    },
    withTo: {
      type: String,
    },
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
  },
  {versionKey: false}
);

const Withdraw = model('Withdraw', withdrawSchema);
module.exports = Withdraw;
