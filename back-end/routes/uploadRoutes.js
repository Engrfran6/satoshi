const {Router} = require('express');
const uploadController = require('../controllers/uploadController');
const {protect} = require('../middlewares/auth-middleware');

const imageRouter = Router();

imageRouter.post('/upload', protect, uploadController.uploadImage);

module.exports = imageRouter;
