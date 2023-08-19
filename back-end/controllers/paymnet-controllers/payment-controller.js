const BankTransfer = require('../../models/PaymentOptions/BankTransferModel');
const UsdtWallet = require('../../models/PaymentOptions/USDTmodel');
const BtcWallet = require('../../models/PaymentOptions/BTCModel');

exports.getAllPaymentOptions = async (req, res) => {
  try {
    const bankDetails = await BankTransfer.find({}); // Fetch data from the first model
    const btcDetails = await BtcWallet.find({});
    const usdtDetails = await UsdtWallet.find({});

    const allPaymentOptionData = {
      bank: bankDetails,
      btc: btcDetails,
      usdt: usdtDetails,
    };

    return res.status(200).json({
      status: 'success',
      data: allPaymentOptionData, // Send the combined data as a response
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
