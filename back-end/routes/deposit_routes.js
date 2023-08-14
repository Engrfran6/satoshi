const { Router } = require('express');
const { protect } = require('../middlewares/auth-middleware');
const { createDeposit, getDeposits } = require('../controllers/deposit-controller');

const packageRouter = Router();

packageRouter.get('/', protect, getDeposits);
packageRouter.post('/create', protect, createDeposit);

module.exports = packageRouter;
