const {Router} = require('express');
const {createPackage, getPackage} = require('../controllers/package-controller');

const packageRouter = Router();

packageRouter.get('/', getPackage);
packageRouter.post('/create', createPackage);

module.exports = packageRouter;
