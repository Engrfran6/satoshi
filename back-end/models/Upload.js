const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  imageBuffer: Buffer,
});

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
