const indexRouter  = require('./index')
const authRouter = require('./auth_routes');


module.exports = [
  ['/', indexRouter],
  ['/auth', authRouter],
]