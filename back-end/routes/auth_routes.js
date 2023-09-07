const {Router} = require('express');
const {
  register,
  login,
  authorizeAccount,
  getUsers,
  deleteUser,
  updateUser,
} = require('../controllers/auth-controller');
const {protect} = require('../middlewares/auth-middleware');
const {
  getInvestments,
  deleteInvestment,
  updateInvestment,
} = require('../controllers/invest-controller');
const {
  getDeposits,
  deleteDeposit,
  updateDeposit,
  upload,
} = require('../controllers/deposit-controller');
const {
  getWithdrawals,
  deleteWithdrawal,
  updateWithdrawal,
} = require('../controllers/withdrawal-controller');
const {
  getBtcs,
  deleteBtc,
  updateBtc,
} = require('../controllers/paymnet-controllers/btc-controller');
const {
  getUsdts,
  deleteUsdt,
  updateUsdt,
} = require('../controllers/paymnet-controllers/usdt-controller');
const {
  getBanks,
  deleteBank,
  updateBank,
} = require('../controllers/paymnet-controllers/deposit-transfer-controller');
const {deleteActivities} = require('../controllers/activity-controller');
const {deletePackage, updatePackage} = require('../controllers/package-controller');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/authorize', protect, authorizeAccount);

authRouter.get('/users', protect, getUsers);
authRouter.delete('/users/:userId', protect, deleteUser);
authRouter.patch('/users/:userId', protect, updateUser);

authRouter.get('/investments', getInvestments);
authRouter.delete('/investment/:investmentId', protect, deleteInvestment);
authRouter.patch('/investment/:investmentId', protect, updateInvestment);

authRouter.get('/deposits', protect, getDeposits);
authRouter.delete('/deposit/:depositId', protect, deleteDeposit);
authRouter.patch('/deposit/:depositId', protect, updateDeposit);

authRouter.get('/withdrawals', protect, getWithdrawals);
authRouter.delete('/withdrawal/:withdrawalId', protect, deleteWithdrawal);
authRouter.patch('/withdrawal/:withdrawalId', protect, updateWithdrawal);

authRouter.get('/btcs', protect, getBtcs);
authRouter.delete('/btc/:btcId', protect, deleteBtc);
authRouter.patch('/btc/:btcId', protect, updateBtc);

authRouter.get('/usdts', protect, getUsdts);
authRouter.delete('/usdt/:usdtId', protect, deleteUsdt);
authRouter.patch('/usdt/:usdtId', protect, updateUsdt);

authRouter.get('/banks', protect, getBanks);
authRouter.delete('/bank/:bankId', protect, deleteBank);
authRouter.patch('/bank/:bankId', protect, updateBank);

authRouter.delete('/package/:packageId', protect, deletePackage);
authRouter.patch('/package/:packageId', protect, updatePackage);
authRouter.delete('/activity/:activityId', protect, deleteActivities);

module.exports = authRouter;
