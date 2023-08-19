const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const BtcWalletSchema = new Schema(
  {
    btcWalletAddress: {
      type: String,
    },
    btcNetwork: {
      type: String,
    },
  },
  {versionKey: false}
);

BtcWalletSchema.plugin(AutoGeneratePlugin);

const BtcWallet = model('BtcWallet', BtcWalletSchema);
module.exports = BtcWallet;
