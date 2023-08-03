const indexRouter  = require('./index')
const authRouter = require('./auth_routes');
const accRouter = require('./acc_routes');


module.exports = [
  ['/', indexRouter],
  ['/auth', authRouter],
  ['/account', accRouter],
]