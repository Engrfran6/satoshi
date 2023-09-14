const indexRouter = require('./index');
const authRouter = require('./auth_routes');
const packageRouter = require('./package_routes');

const investRouter = require('./investment_routes');
const withdrawRouter = require('./withdraw_routes');
const activityRouter = require('./activities_routes');

const {getPackages} = require('../controllers/package-controller');
const {
  btcRouter,
  usdtRouter,
  bankRouter,
  adminBankRouter,
  adminBtcRouter,
  adminUsdtRouter,
} = require('./paymentOption_routes');
const depositRouter = require('./deposit_routes');
// const {getUser} = require('../controllers/auth-controller');
const imageRouter = require('./imageRoutes');
const verifiedUserRouter = require('./verified_user_routes');

module.exports = [
  ['/api', indexRouter],
  ['/api/auth', authRouter],
  // ['/api/user', getUser],
  ['/api/deposit', depositRouter],
  ['/api/withdraw', withdrawRouter],
  ['/api/investment', investRouter],
  ['/api/activity', activityRouter],
  ['/api/btc', btcRouter],
  ['/api/usdt', usdtRouter],
  ['/api/bank', bankRouter],
  ['/api/package', packageRouter],
  ['/api/packages', getPackages],
  ['/api/adminbanks', adminBankRouter],
  ['/api/adminbtcs', adminBtcRouter],
  ['/api/adminusdts', adminUsdtRouter],
  ['/api/upload', imageRouter],
  ['/api/verify', verifiedUserRouter],
];
