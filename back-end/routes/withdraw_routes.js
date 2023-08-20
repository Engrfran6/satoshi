const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {createWithdraw, getWithraws} = require('../controllers/withdrawal-controller');

const withdrawRouter = Router();

withdrawRouter.get('/', getWithraws);
withdrawRouter.post('/create', createWithdraw);

module.exports = withdrawRouter;
