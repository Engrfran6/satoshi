const Joi = require('@hapi/joi');
const UsdtWallet = require('../../models/PaymentOptions/USDTmodel');

const createUsdtWalletSchema = Joi.object().keys({
  usdtWalletAddress: Joi.string().required(),
  usdtNetwork: Joi.string().required(),
});

exports.createUsdtWallet = async (req, res) => {
  try {
    const doc = req.body;
    let {usdtWalletAddress, usdtNetwork} = req.body;

    const {error} = createUsdtWalletSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    usdtWalletAddress = String(usdtWalletAddress);
    usdtNetwork = String(usdtNetwork);

    const usdtDetails = new UsdtWallet({
      usdtWalletAddress,
      usdtNetwork,
    });

    await usdtDetails.save();
    if (usdtDetails) {
      return res.status(201).json({
        status: 'success',
        data: usdtDetails,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
