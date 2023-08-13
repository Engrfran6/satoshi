const indexRouter  = require('./index')
const authRouter = require('./auth_routes');
const packageRouter = require('./package_routes');


module.exports = [
  ['/', indexRouter],
  ['/auth', authRouter],
  ['/package', packageRouter],
]