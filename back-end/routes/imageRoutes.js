// const express = require('express');
// const {Router} = require('express');
// const imageController = require('../controllers/image-controller');
// const multer = require('multer');
// const {protect} = require('../middlewares/auth-middleware');

// const imageRouter = Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '/Users/admin/Documents/project/satoshi/back-end/uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({storage: storage});

// imageRouter.post('/', protect, upload.single('photo'), imageController.uploadImage);

// module.exports = imageRouter;

require('dotenv').config(); // Load environment variables from .env file
const fs = require('fs');

// Read and parse the JSON file
const rawConfig = fs.readFileSync('imageupload-ca45f-firebase-adminsdk-mcr84-a6c64c37e9.json'); // Change the file path accordingly
const config = JSON.parse(rawConfig);

const express = require('express');
const {Router} = require('express');
const imageController = require('../controllers/image-controller');
const multer = require('multer');
const {protect} = require('../middlewares/auth-middleware');
const admin = require('firebase-admin'); // Import Firebase Admin SDK

const imageRouter = Router();

// const serviceAccount = require('/Users/admin/Documents/project/satoshi/back-end/imageupload-ca45f-firebase-adminsdk-mcr84-a6c64c37e9.json'); // Path to your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(config),
  storageBucket: 'imageupload-ca45f.appspot.com', // Replace with your Firebase storage bucket URL
});

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({storage: storage});

imageRouter.post('/', protect, upload.single('photo'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const bucket = admin.storage().bucket(); // Get a reference to your Firebase storage bucket

    const fileName = Date.now() + '-' + file.originalname;
    const fileUpload = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on('error', (error) => {
      res.status(500).send('Error uploading file.');
    });

    blobStream.on('finish', () => {
      res.status(200).send('File uploaded successfully.');
    });

    blobStream.end(file.buffer);
  } catch (error) {
    res.status(500).send('Error uploading file.');
  }
});

module.exports = imageRouter;
