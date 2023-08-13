const { Router } = require('express');
const { getPackages, createPackage } = require('../controllers/package-controller');

const packageRouter = Router();

packageRouter.get('/', getPackages);
packageRouter.post('/create', createPackage);

module.exports = packageRouter;
