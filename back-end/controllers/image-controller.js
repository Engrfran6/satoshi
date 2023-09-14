const Image = require('../models/ImageUpload/image');

exports.uploadImage = async (req, res) => {
  try {
    const user = req.user;
    const file = req.file;

    const image = new Image({
      user: user._id,
      photo: file.path,
    });

    if (!file.fieldname) {
      return res.status(400).json({error: 'No file uploaded'});
    }
    await image.save();

    res.status(201).json({message: 'Image uploaded successfully', image});
  } catch (error) {
    res.status(500).json({error: 'Server error'});
  }
};
