const {Router} = require('express');
const {createInvestment, getInvestments} = require('../controllers/invest-controller');
const {protect} = require('../middlewares/auth-middleware');

const authRouter = Router();

authRouter.post('/create', protect, createInvestment);
authRouter.get('/', protect, getInvestments);

module.exports = authRouter;
