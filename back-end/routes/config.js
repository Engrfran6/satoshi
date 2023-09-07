const indexRouter = require('./index');
const authRouter = require('./auth_routes');
const packageRouter = require('./package_routes');

const investRouter = require('./investment_routes');
const withdrawRouter = require('./withdraw_routes');
const activityRouter = require('./activities_routes');

const {getPackages} = require('../controllers/package-controller');
const {btcRouter, usdtRouter, bankRouter} = require('./paymentOption_routes');
const depositRouter = require('./deposit_routes');

module.exports = [
  ['/', indexRouter],
  ['/auth', authRouter],
  ['/deposit', depositRouter],
  ['/withdraw', withdrawRouter],
  ['/investment', investRouter],
  ['/activity', activityRouter],
  ['/btc', btcRouter],
  ['/usdt', usdtRouter],
  ['/bank', bankRouter],
  ['/package', packageRouter],
  ['/packages', getPackages],
];
