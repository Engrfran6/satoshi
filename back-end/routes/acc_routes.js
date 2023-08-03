const { Router } = require('express');
const { createAccount, getAccounts } = require('../controllers/acc-controller');

const accRouter = Router();

accRouter.get('/', getAccounts);
accRouter.post('/create', createAccount);

module.exports = accRouter;
