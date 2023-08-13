const Joi = require('@hapi/joi');
const Package = require('../models/Packages/PackageModel')

const createPackageSchema = Joi.object().keys({
  name: Joi.string().required(),
  amount: Joi.string().required(),
  dailyRoi: Joi.string().required(),
});


exports.createPackage = async (req, res) => {
  try {
    const doc = req.body;
    const { name, dailyRoi, amount } = req.body;
    const { error } = createPackageSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const roi = Number(dailyRoi);
    const newAmount = Number(amount);
    const package = new Package({
      name,
      amount: newAmount,
      dailyRoi: roi
    });

    await package.save();
    if (package) {
      return res.status(201).json({
        status: 'success',
        data: package
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    });
  }
};

exports.getPackages = async (req, res) => {
  try {
    const package = await Package.find({})
    return res.status(200).json({
      status: 'success',
      data: package
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    });
  }
};
