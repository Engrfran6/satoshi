const {Router} = require('express');
const {createInvestment, getInvestment} = require('../controllers/invest-controller');
const {protect} = require('../middlewares/auth-middleware');

const authRouter = Router();

authRouter.post('/create', protect, createInvestment);
authRouter.get('/', protect, getInvestment);

module.exports = authRouter;
