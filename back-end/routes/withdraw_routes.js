const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {createWithdraw, getWithraws} = require('../controllers/withdrawal-controller');

const withdrawRouter = Router();

withdrawRouter.get('/', protect, getWithraws);
withdrawRouter.post('/create', protect, createWithdraw);

module.exports = withdrawRouter;
