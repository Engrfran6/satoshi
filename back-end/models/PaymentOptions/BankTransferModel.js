const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const bankTransferSchema = new Schema(
  {
    accountName: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
    bankName: {
      type: String,
    },
    bankAddress: {
      type: String,
    },
    routingNumber: {
      type: String,
    },
    clientAddress: {
      type: String,
    },
  },
  {versionKey: false}
);

bankTransferSchema.plugin(AutoGeneratePlugin);

const BankTransfer = model('BankTransfer', bankTransferSchema);
module.exports = BankTransfer;
