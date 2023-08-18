const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const accountSchema = new Schema(
  {
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
    StpWallet: {
      type: String,
    },
    BTCWallet: {
      type: String,
    },
    USDTWallet: {
      type: String,
      ref: 'Account',
    },
    BankTransfer: {
      type: String,
      ref: 'Account',
    },
  },
  {versionKey: false}
);

accountSchema.plugin(AutoGeneratePlugin);

const Account = model('Deposit', accountSchema);
module.exports = Account;
