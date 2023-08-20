const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {createDeposit, getDeposits} = require('../controllers/deposit-controller');

const depositRouter = Router();

depositRouter.get('/', getDeposits);
depositRouter.post('/create', createDeposit);

module.exports = depositRouter;
