const Upload = require('../models/Upload');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

(exports.uploadImage = upload.single('photo')),
  async (req, res) => {
    try {
      const {filename, contentType, buffer} = req.file;

      const newUpload = new Upload({
        filename,
        contentType,
        imageBuffer: buffer,
      });

      const savedUpload = await newUpload.save();

      res.status(201).json({
        status: 'success',
        data: savedUpload,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error uploading image',
      });
    }
  };
