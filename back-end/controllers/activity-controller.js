const Activity = require('../models/Activities/ActivityModel');

exports.getActivities = async (req, res) => {
  try {
    const userId = req.user._id;
    const activities = await Activity.find({user: userId});

    return res.status(200).json({
      status: 'success',
      data: activities,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};
