const Image = require('../models/ImageUpload/image');

exports.uploadImage = async (req, res) => {
  try {
    const {title, imageUrl} = req.body;

    const image = new Image({
      title,
      imageUrl,
    });

    await image.save();

    res.status(201).json({message: 'Image uploaded successfully', image});
  } catch (error) {
    res.status(500).json({error: 'Server error'});
  }
};
