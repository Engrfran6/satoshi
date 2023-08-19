const Joi = require('@hapi/joi');
const BtcWallet = require('../../models/PaymentOptions/BTCModel');

const createBtcWalletSchema = Joi.object().keys({
  btcWalletAddress: Joi.string().required(),
  btcNetwork: Joi.string().required(),
});

exports.createBtcWallet = async (req, res) => {
  try {
    const doc = req.body;
    let {btcWalletAddress, btcNetwork} = req.body;

    const {error} = createBtcWalletSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    btcWalletAddress = String(btcWalletAddress);
    btcNetwork = String(btcNetwork);

    const btcDetails = new BtcWallet({
      btcWalletAddress,
      btcNetwork,
    });

    await btcDetails.save();
    if (btcDetails) {
      return res.status(201).json({
        status: 'success',
        data: btcDetails,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
