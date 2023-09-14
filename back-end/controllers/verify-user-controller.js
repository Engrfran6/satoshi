const Joi = require('@hapi/joi');
const VerifyUser = require('../models/Users/VerifyUserModel');
const User = require('../models/Users/UserModel');

const createVerifiedUserSchema = Joi.object().keys({
  fullName: Joi.string().required(),
  occupation: Joi.string().required(),
  incomeSource: Joi.string().required(),
  annualIncome: Joi.string().required(),
  dob: Joi.string().required(),
  maritalStatus: Joi.string().required(),
  addresLine1: Joi.string().required(),
  addressLine2: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  nationality: Joi.string().required(),
  zipcode: Joi.string().required(),
});

exports.CreateVerifiedUserAccount = async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    const doc = req.body;
    const files = req.files;

    console.log('body', doc);
    console.log('files', files);

    // const {docFiles} = createVerifiedUserSchema.validate({...files});
    // if (docFiles) {
    //   return res.status(400).json({error: docFiles.details[0].message});
    // }
    const {error} = createVerifiedUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    const params = {
      user: userId,
      fullName: doc.fullName,
      occupation: doc.occupation,
      incomeSource: doc.incomeSource,
      annualIncome: doc.annualIncome,
      dob: doc.dob,
      maritalStatus: doc.maritalStatus,
      addresLine1: doc.addresLine1,
      addressLine2: doc.addressLine2,
      city: doc.city,
      state: doc.state,
      nationality: doc.nationality,
      zipcode: doc.zipcode,
      dlFront: files.dlFront.path,
      dlBack: files.dlBack.path,
      passport: files.passport.path,
      selfie: files.selfie.path,
    };

    const verifiedUser = new VerifyUser(params);
    await verifiedUser.save();

    if (verifiedUser) {
      const fullName = doc?.fullName;
      await User.findByIdAndUpdate(userId, {status: 'verified', fullName: fullName}, {new: true});
      return res.status(201).json({
        status: 'success',
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getVerifiedUsers = async (req, res) => {
  const verified = await VerifyUser.retrievePaginated({
    ...req.query,
  });
  res.status(201).json({
    status: 'success',
    ...verified,
  });
};

exports.updateVerifiedUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {new: true});

    if (!updatedUser) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      updatedUser: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating user',
      error: error.message,
    });
  }
};
