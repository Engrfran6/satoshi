const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const accountSchema = new Schema(
  {
    StpWallet: {
      address: {type: String},
      balance: {type: Number, default: 0},
    },
    BTCWallet: {
      address: {type: String},
      balance: {type: Number, default: 0},
    },
    USDTWallet: {
      address: {type: String},
      balance: {type: Number, default: 0},
    },
  },
  {versionKey: false}
);

accountSchema.plugin(AutoGeneratePlugin);

const Account = model('Account', accountSchema);
module.exports = Account;
