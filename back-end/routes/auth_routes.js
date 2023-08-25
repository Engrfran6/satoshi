const {Router} = require('express');
const {register, login, authorizeAccount, getUsers} = require('../controllers/auth-controller');
const {protect} = require('../middlewares/auth-middleware');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/authorize', protect, authorizeAccount);
authRouter.get('/users', protect, getUsers);

module.exports = authRouter;
