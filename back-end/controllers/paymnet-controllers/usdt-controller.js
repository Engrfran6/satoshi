const Joi = require('@hapi/joi');
const UsdtWallet = require('../../models/PaymentOptions/USDTmodel');

const createUsdtWalletSchema = Joi.object().keys({
  usdtWalletAddress: Joi.string().required(),
  usdtNetwork: Joi.string().required(),
  targetUserId: Joi.string(),
});

exports.createUsdtWallet = async (req, res) => {
  const {targetUserId} = req.body;
  try {
    const user = req.user;
    const doc = req.body;
    let {usdtWalletAddress, usdtNetwork} = req.body;

    const {error} = createUsdtWalletSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    usdtWalletAddress = String(usdtWalletAddress);
    usdtNetwork = String(usdtNetwork);

    const userId = () => {
      if (targetUserId) {
        return targetUserId;
      } else {
        return user?._id;
      }
    };

    const usdtDetails = new UsdtWallet({
      user: userId(),
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

exports.getUsdt = async (req, res) => {
  try {
    const userId = req.user._id;
    const usdt = await UsdtWallet.find({user: userId});

    return res.status(201).json({
      status: 'success',
      data: usdt,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getUsdts = async (req, res) => {
  const usdts = await UsdtWallet.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...usdts,
  });
};

exports.deleteUsdt = async (req, res) => {
  const usdtId = req.params.usdtId;

  try {
    const deletedUsdt = await UsdtWallet.findByIdAndDelete(usdtId);

    if (!deletedUsdt) {
      return res.status(404).json({error: 'User account not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Usdt account deleted successfully',
      deletedUsdt: deletedUsdt,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting Usdt account',
      error: error.message,
    });
  }
};

exports.updateUsdt = async (req, res) => {
  const usdtId = req.params.usdtId;
  const updatedData = req.body;

  try {
    const updatedUsdt = await UsdtWallet.findByIdAndUpdate(usdtId, updatedData, {new: true});

    if (!updatedUsdt) {
      return res.status(404).json({error: 'Usdt account not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'Usdt account updated successfully',
      updatedUsdt: updatedUsdt,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating Usdt account',
      error: error.message,
    });
  }
};
