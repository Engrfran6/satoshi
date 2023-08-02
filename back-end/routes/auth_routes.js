const { Router } = require('express');
const { register, login, recoverPassword, changePassword } = require('../controllers/auth-controller');

const authRouter = Router();

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.post('/recover-password', recoverPassword);

authRouter.post('/change-password', changePassword);

module.exports = authRouter;
