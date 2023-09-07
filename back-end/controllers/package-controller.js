const Joi = require('@hapi/joi');
const Package = require('../models/Packages/PackageModel');

const createPackageSchema = Joi.object().keys({
  name: Joi.string().required(),
  amount: Joi.string().required(),
  dailyRoi: Joi.string().required(),
  duration: Joi.string().required(),
  profitRate: Joi.string().required(),
  lossRate: Joi.string().required(),
  dailyLoss: Joi.string().required(),
  minDeposit: Joi.string().required(),
  maxDeposit: Joi.string().required(),
  totalPercentageReturn: Joi.string().required(),
  referalBonus: Joi.string().required(),
});

exports.createPackage = async (req, res) => {
  try {
    const doc = req.body;
    let {
      name,
      dailyRoi,
      amount,
      profitRate,
      lossRate,
      dailyLoss,
      minDeposit,
      maxDeposit,
      totalPercentageReturn,
      referalBonus,
    } = req.body;

    const {error} = createPackageSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    dailyRoi = Number(dailyRoi);
    amount = Number(amount);
    profitRate = Number(profitRate);
    lossRate = Number(lossRate);
    dailyLoss = Number(dailyLoss);
    minDeposit = Number(minDeposit);
    maxDeposit = Number(maxDeposit);
    referalBonus = Number(referalBonus);
    totalPercentageReturn = Number(totalPercentageReturn);

    const package = new Package({
      name,
      amount,
      dailyRoi,
      profitRate,
      lossRate,
      dailyLoss,
      minDeposit,
      maxDeposit,
      totalPercentageReturn,
      duration: doc.duration,
      referalBonus: doc.referalBonus,
    });

    await package.save();
    if (package) {
      return res.status(201).json({
        status: 'success',
        data: package,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getPackage = async (req, res) => {
  try {
    const package = await Package.find({});
    return res.status(200).json({
      status: 'success',
      data: package,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getPackages = async (req, res) => {
  const packages = await Package.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...packages,
  });
};

exports.deletePackage = async (req, res) => {
  const packageId = req.params.packageId;

  try {
    const deletedPackage = await Package.findByIdAndDelete(packageId);

    if (!deletedPackage) {
      return res.status(404).json({error: 'package not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Package account deleted successfully',
      deletedPackage: deletedPackage,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting Package account',
      error: error.message,
    });
  }
};

exports.updatePackage = async (req, res) => {
  const packageId = req.params.packageId;
  const updatedData = req.body;

  try {
    const updatedPackage = await Package.findByIdAndUpdate(packageId, updatedData, {new: true});

    if (!updatedPackage) {
      return res.status(404).json({error: 'Package account not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'Package account updated successfully',
      updatedPackage: updatedPackage,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating Package account',
      error: error.message,
    });
  }
};
