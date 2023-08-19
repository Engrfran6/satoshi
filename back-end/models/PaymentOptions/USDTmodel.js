const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const UsdtWalletSchema = new Schema(
  {
    usdtWalletAddress: {
      type: String,
    },
    usdtNetwork: {
      type: String,
    },
  },
  {versionKey: false}
);

UsdtWalletSchema.plugin(AutoGeneratePlugin);

const UsdtWallet = model('UsdtWallet', UsdtWalletSchema);
module.exports = UsdtWallet;
