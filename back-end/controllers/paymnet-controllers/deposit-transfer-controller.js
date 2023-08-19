const Joi = require('@hapi/joi');
const BankTransfer = require('../../models/PaymentOptions/BankTransferModel');

const createBankTransferSchema = Joi.object().keys({
  accountNumber: Joi.string().required(),
  amountName: Joi.string().required(),
  bankName: Joi.string().required(),
  bankAddress: Joi.string().required(),
  routingNumber: Joi.string().required(),
  clientAddress: Joi.string().required(),
});

exports.createBankTransfer = async (req, res) => {
  try {
    const doc = req.body;
    let {accountNumber, accountName, bankName, bankAddress, routingNumber, clientAddress} =
      req.body;

    const {error} = createBankTransferSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    accountNumber = Number(accountNumber);
    routingNumber = Number(routingNumber);

    const bankDetails = new BankTransfer({
      accountNumber,
      accountName,
      bankName,
      bankAddress,
      routingNumber,
      clientAddress,
    });

    await bankDetails.save();
    if (bankDetails) {
      return res.status(201).json({
        status: 'success',
        data: bankDetails,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
