const express = require('express');
const {Router} = require('express');
const multer = require('multer');
const {protect} = require('../middlewares/auth-middleware');

const {
  getVerifiedUsers,
  CreateVerifiedUserAccount,
} = require('../controllers/verify-user-controller');

const verifiedUserRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/Users/admin/Documents/project/satoshi/back-end/verifiedUsers');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({storage: storage});

verifiedUserRouter.get('/', protect, getVerifiedUsers);
verifiedUserRouter.post(
  '/create',
  protect,
  upload.fields([
    {name: 'dlFront', maxCount: 4},
    {name: 'dlBack', maxCount: 4},
    {name: 'passport', maxCount: 4},
    {name: 'selfie', maxCount: 4},
  ]),
  CreateVerifiedUserAccount
);

module.exports = verifiedUserRouter;
