const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const paymentOptionSchema = new Schema(
  {
    BTCWallet: {
      type: String,
      ref: 'BtcWallet',
    },
    USDTWallet: {
      type: String,
      ref: 'UsdtWallet',
    },
    BankDepositAndWireTransfer: {
      type: String,
      ref: 'BankTransfer',
    },
  },
  {versionKey: false}
);

paymentOptionSchema.plugin(AutoGeneratePlugin);

const PaymentOption = model('Deposit', paymentOptionSchema);
module.exports = PaymentOption;
