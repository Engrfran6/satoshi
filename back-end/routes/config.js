const indexRouter = require('./index');
const authRouter = require('./auth_routes');
const packageRouter = require('./package_routes');
const depositRouter = require('./deposit_routes');
const investRouter = require('./investment_routes');
const paymentRoutes = require('./paymentOption_routes');

module.exports = [
  ['/', indexRouter],
  ['/auth', authRouter],
  ['/package', packageRouter],
  ['/deposit', depositRouter],
  ['/investment', investRouter],

  ['/btc', paymentRoutes.btcRouter],
  ['/bank', paymentRoutes.bankRouter],
  ['/usdt', paymentRoutes.usdtRouter],
  ['/all-payment-options', paymentRoutes.allPaymentOptionRouter],
];
