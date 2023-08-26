const indexRouter = require('./index');
const authRouter = require('./auth_routes');
const packageRouter = require('./package_routes');
const depositRouter = require('./deposit_routes');
const investRouter = require('./investment_routes');
const paymentRoutes = require('./paymentOption_routes');
const withdrawRouter = require('./withdraw_routes');
const activityRouter = require('./activities_routes');

module.exports = [
  ['/', indexRouter],
  ['/auth', authRouter],
  ['/package', packageRouter],
  ['/deposit', depositRouter],
  ['/withdraw', withdrawRouter],
  ['/investment', investRouter],
  ['/activity', activityRouter],
  ['/btc', paymentRoutes.btcRouter],
  ['/bank', paymentRoutes.bankRouter],
  ['/usdt', paymentRoutes.usdtRouter],
  ['/all-payment-options', paymentRoutes.allPaymentOptionRouter],
];
