const {Router} = require('express');
const {
  createBankTransfer,
  getBank,
  getAdminBanks,
} = require('../controllers/paymnet-controllers/deposit-transfer-controller');
const {
  createBtcWallet,
  getBtc,
  getAdminBtcs,
} = require('../controllers/paymnet-controllers/btc-controller');
const {
  createUsdtWallet,
  getUsdt,
  getAdminUsdts,
} = require('../controllers/paymnet-controllers/usdt-controller');
const {protect} = require('../middlewares/auth-middleware');

// Create routers for each payment option
const btcRouter = Router();
const usdtRouter = Router();
const bankRouter = Router();
const adminBankRouter = Router();
const adminBtcRouter = Router();
const adminUsdtRouter = Router();

// Define routes for each payment option
bankRouter.get('/', protect, getBank);
bankRouter.post('/create', protect, createBankTransfer);

btcRouter.get('/', protect, getBtc);
btcRouter.post('/create', protect, createBtcWallet);

usdtRouter.get('/', protect, getUsdt);
usdtRouter.post('/create', protect, createUsdtWallet);

adminBankRouter.get('/', protect, getAdminBanks);
adminBtcRouter.get('/', protect, getAdminBtcs);
adminUsdtRouter.get('/', protect, getAdminUsdts);

module.exports = {
  btcRouter,
  usdtRouter,
  bankRouter,
  adminBankRouter,
  adminBtcRouter,
  adminUsdtRouter,
};
