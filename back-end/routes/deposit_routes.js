const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {createDeposit} = require('../controllers/deposit-controller');
// const {createDeposit, getDeposits} = require('../controllers/deposit-controller');

const depositRouter = Router();

// depositRouter.get('/', protect, getDeposits);
depositRouter.post('/create', protect, createDeposit);

module.exports = depositRouter;
