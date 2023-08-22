const ApplicationError = require('../libs/application-error');
const User = require('../models/Users/UserModel');
const jwt = require('jsonwebtoken');

exports.protect = async (req, res, next) => {
  try {
    const adminRoutes = ['/stats'];
    const url = req.url;
    let token;
    const JWT_SECRET = process.env.JWT_SECRET;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      next(new ApplicationError('Not authorized to access this route', 401));
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findOne({email: decoded.email});
      if (!user) {
        next(new ApplicationError('Not authorized to access this route', 401));
      }
      if (adminRoutes.includes(url) && user.role !== 'admin') {
        next(new ApplicationError('Not authorized to access this route', 401));
      }
      req.user = user;
      next();
    } catch (e) {
      next(new ApplicationError(e.message, 500));
    }
  } catch (err) {
    next(new ApplicationError(err.message, 500));
  }
};
