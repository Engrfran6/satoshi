const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {createWithdraw, getWithrawal} = require('../controllers/withdrawal-controller');

const withdrawRouter = Router();

withdrawRouter.get('/', protect, getWithrawal);
withdrawRouter.post('/create', protect, createWithdraw);

module.exports = withdrawRouter;
