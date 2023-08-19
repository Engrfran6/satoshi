const {Router} = require('express');
const {
  createBankTransfer,
} = require('../controllers/paymnet-controllers/deposit-transfer-controller');
const {createBtcWallet} = require('../controllers/paymnet-controllers/btc-controller');
const {createUsdtWallet} = require('../controllers/paymnet-controllers/usdt-controller');
const {getAllPaymentOptions} = require('../controllers/paymnet-controllers/payment-controller');

// Create routers for each payment option
const bankRouter = Router();
const btcRouter = Router();
const usdtRouter = Router();
const allPaymentOptionRouter = Router();

// Define routes for each payment option
bankRouter.post('/create', createBankTransfer);
btcRouter.post('/create', createBtcWallet);
usdtRouter.post('/create', createUsdtWallet);
allPaymentOptionRouter.get('/', getAllPaymentOptions);

module.exports = {
  bankRouter,
  btcRouter,
  usdtRouter,
  allPaymentOptionRouter,
};
