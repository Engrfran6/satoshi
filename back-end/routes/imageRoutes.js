const express = require('express');
const {Router} = require('express');
const imageController = require('../controllers/image-controller');
const multer = require('multer');
const {protect} = require('../middlewares/auth-middleware');

const imageRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/Users/admin/Documents/project/satoshi/back-end/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({storage: storage});

imageRouter.post('/', protect, upload.single('photo'), imageController.uploadImage);

module.exports = imageRouter;
