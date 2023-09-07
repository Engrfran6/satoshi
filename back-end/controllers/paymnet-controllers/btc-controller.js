const Joi = require('@hapi/joi');
const BtcWallet = require('../../models/PaymentOptions/BTCModel');

const createBtcWalletSchema = Joi.object().keys({
  btcWalletAddress: Joi.string().required(),
  btcNetwork: Joi.string().required(),
  targetUserId: Joi.string(),
});

exports.createBtcWallet = async (req, res) => {
  const {targetUserId} = req.body;
  try {
    const user = req.user;
    const doc = req.body;
    let {btcWalletAddress, btcNetwork} = req.body;

    const {error} = createBtcWalletSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    btcWalletAddress = String(btcWalletAddress);
    btcNetwork = String(btcNetwork);

    const userId = () => {
      if (targetUserId) {
        return targetUserId;
      } else {
        return user?._id;
      }
    };

    const btcDetails = new BtcWallet({
      user: userId(),
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

exports.getBtc = async (req, res) => {
  try {
    const userId = req.user._id;
    const btc = await BtcWallet.find({user: userId});

    return res.status(201).json({
      status: 'success',
      data: btc,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getBtcs = async (req, res) => {
  const btcs = await BtcWallet.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...btcs,
  });
};

exports.deleteBtc = async (req, res) => {
  const btcId = req.params.btcId;

  try {
    const deletedBtc = await BtcWallet.findByIdAndDelete(btcId);

    if (!deletedBtc) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Btc account deleted successfully',
      deletedBtc: deletedBtc,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting btc account',
      error: error.message,
    });
  }
};

exports.updateBtc = async (req, res) => {
  const btcId = req.params.btcId;
  const updatedData = req.body;

  try {
    const updatedBtc = await BtcWallet.findByIdAndUpdate(btcId, updatedData, {new: true});

    if (!updatedBtc) {
      return res.status(404).json({error: 'btc account not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'btc account updated successfully',
      updatedBtc: updatedBtc,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating btc account',
      error: error.message,
    });
  }
};
