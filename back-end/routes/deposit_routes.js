const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {getDeposit, createDeposit, upload} = require('../controllers/deposit-controller');

const depositRouter = Router();

depositRouter.get('/', protect, getDeposit);
depositRouter.post('/create', upload.single('image'), protect, createDeposit);

module.exports = depositRouter;
