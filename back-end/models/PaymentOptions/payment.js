const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
    BTCWallet: {
      type: String,
    },
    USDTWallet: {
      type: String,
      ref: 'Account',
    },
    BankDeposit: {
      type: String,
      ref: 'Account',
    },
    WireTransfer: {
      type: String,
      ref: 'Account',
    },
  },
  {versionKey: false}
);

paymentSchema.plugin(AutoGeneratePlugin);

const Payment = model('Deposit', paymentSchema);
module.exports = Payment;
