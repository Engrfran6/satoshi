const {Router} = require('express');
const {register, login, authorizeAccount} = require('../controllers/auth-controller');
const {protect} = require('../middlewares/auth-middleware');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/authorize', protect, authorizeAccount);

module.exports = authRouter;
